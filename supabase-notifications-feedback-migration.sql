-- Adds customer order inserts and feedback messages for notifications testing.
-- Run this once in Supabase SQL Editor after the original schema.

create table if not exists public.feedback_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  message text not null,
  status text not null default 'New',
  admin_note text default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.feedback_messages enable row level security;

drop policy if exists "private customer order submit" on public.orders;
create policy "private customer order submit"
on public.orders
for insert
to anon
with check (true);

drop policy if exists "private customer feedback submit" on public.feedback_messages;
create policy "private customer feedback submit"
on public.feedback_messages
for insert
to anon
with check (true);

drop policy if exists "authenticated feedback access" on public.feedback_messages;
create policy "authenticated feedback access"
on public.feedback_messages
for all
to authenticated
using (true)
with check (true);

grant usage on schema public to anon, authenticated;
grant insert on public.orders to anon;
grant select, insert, update, delete on public.orders to authenticated;
grant insert on public.feedback_messages to anon;
grant select, insert, update, delete on public.feedback_messages to authenticated;
