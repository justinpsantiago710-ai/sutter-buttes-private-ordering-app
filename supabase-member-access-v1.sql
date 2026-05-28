-- Member Access v1
-- Run this after the main Supabase schema when you are ready to sync guest requests
-- and approved member codes across devices.

alter table public.access_codes
add column if not exists guest_code text not null default 'GUEST2026',
add column if not exists guest_label text not null default 'Weekly Guest Code',
add column if not exists guest_expires text not null default '';

alter table public.orders
add column if not exists member_id text not null default '',
add column if not exists member_code text not null default '',
add column if not exists access_lane text not null default '';

create table if not exists public.members (
  member_id text primary key,
  member_name text not null default '',
  member_code text unique,
  phone text not null default '',
  email text not null default '',
  status text not null default 'pending' check (status in ('pending', 'approved', 'denied', 'disabled')),
  notes text not null default '',
  contact_method text not null default 'Text',
  created_at timestamptz not null default now(),
  approved_at timestamptz,
  last_order_at timestamptz,
  updated_at timestamptz not null default now()
);

drop trigger if exists members_touch_updated_at on public.members;
create trigger members_touch_updated_at
before update on public.members
for each row execute function public.touch_updated_at();

alter table public.members enable row level security;

drop policy if exists "guest member request insert" on public.members;
create policy "guest member request insert"
on public.members
for insert
to anon
with check (status = 'pending');

drop policy if exists "authenticated member management" on public.members;
create policy "authenticated member management"
on public.members
for all
to authenticated
using (true)
with check (true);

-- Explicit API grants. RLS still limits anon to pending inserts only.
grant usage on schema public to anon, authenticated;
grant insert on public.members to anon;
grant select, insert, update, delete on public.members to authenticated;
grant insert on public.orders to anon;
grant select, insert, update, delete on public.orders to authenticated;
grant select, insert, update, delete on public.access_codes to authenticated;

create or replace function public.lookup_member_access(member_code_input text)
returns table (
  member_id text,
  member_name text,
  member_code text,
  phone text,
  email text,
  status text,
  notes text,
  contact_method text,
  created_at timestamptz,
  approved_at timestamptz,
  last_order_at timestamptz
)
language sql
security definer
set search_path = public
as $$
  select
    m.member_id,
    m.member_name,
    m.member_code,
    ''::text as phone,
    ''::text as email,
    m.status,
    ''::text as notes,
    m.contact_method,
    m.created_at,
    m.approved_at,
    m.last_order_at
  from public.members m
  where upper(m.member_code) = upper(member_code_input)
    and m.status = 'approved'
  limit 1;
$$;

grant execute on function public.lookup_member_access(text) to anon, authenticated;
