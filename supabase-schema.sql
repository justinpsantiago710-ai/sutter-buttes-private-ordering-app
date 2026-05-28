-- Sutter Buttes delivery prototype backend schema.
-- Run this in Supabase SQL Editor after creating a project.
-- This schema is for private testing with Supabase Auth enabled.

create extension if not exists pgcrypto;

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  local_id text unique,
  name text not null,
  price numeric(10, 2) not null default 0,
  category text not null default 'Flower',
  subcategory text default '',
  brand text default '',
  description text default '',
  image_url text default '',
  variants jsonb not null default '[]'::jsonb,
  stock integer not null default 0,
  daily_limit integer not null default 0,
  tags text default '',
  active boolean not null default true,
  updated_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  order_number text unique not null,
  customer_name text not null,
  phone text not null,
  customer_email text default '',
  contact_method text not null default 'Text',
  address text not null,
  instructions text default '',
  delivery_option text default '',
  delivery_window text default '',
  customer_visible_message text default '',
  estimated_delivery_time text default '',
  estimated_delivery_date text default '',
  completed_at timestamptz,
  denied_reason_customer text default '',
  assigned_to text default '',
  items jsonb not null default '[]'::jsonb,
  compliance jsonb not null default '{}'::jsonb,
  activity jsonb not null default '[]'::jsonb,
  status text not null default 'Submitted',
  admin_note text default '',
  subtotal numeric(10, 2) not null default 0,
  discount numeric(10, 2) not null default 0,
  bundle_discount numeric(10, 2) not null default 0,
  tax numeric(10, 2) not null default 0,
  delivery_fee numeric(10, 2) not null default 0,
  admin_discount numeric(10, 2) not null default 0,
  total numeric(10, 2) not null default 0,
  promo_code text default '',
  promo_label text default '',
  updated_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

alter table public.orders
add column if not exists assigned_to text default '';

alter table public.orders
add column if not exists customer_email text default '';

alter table public.orders
add column if not exists customer_visible_message text default '';

alter table public.orders
add column if not exists estimated_delivery_time text default '';

alter table public.orders
add column if not exists estimated_delivery_date text default '';

alter table public.orders
add column if not exists completed_at timestamptz;

alter table public.orders
add column if not exists denied_reason_customer text default '';

alter table public.orders
add column if not exists activity jsonb not null default '[]'::jsonb;

alter table public.orders
add column if not exists compliance jsonb not null default '{}'::jsonb;

create table if not exists public.app_settings (
  key text primary key,
  value jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create table if not exists public.access_codes (
  id text primary key default 'default',
  customer_code text not null default '',
  admin_code text not null default 'ADMIN2026',
  invite_codes jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.access_codes
add column if not exists invite_codes jsonb not null default '[]'::jsonb;

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

insert into public.access_codes (id)
values ('default')
on conflict (id) do nothing;

insert into public.app_settings (key, value)
values
  ('front_page', '{}'::jsonb),
  ('design', '{}'::jsonb),
  ('promo', '{}'::jsonb),
  ('delivery_settings', '{}'::jsonb),
  ('team_members', '[]'::jsonb)
on conflict (key) do nothing;

create or replace function public.touch_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists products_touch_updated_at on public.products;
create trigger products_touch_updated_at
before update on public.products
for each row execute function public.touch_updated_at();

drop trigger if exists orders_touch_updated_at on public.orders;
create trigger orders_touch_updated_at
before update on public.orders
for each row execute function public.touch_updated_at();

drop trigger if exists app_settings_touch_updated_at on public.app_settings;
create trigger app_settings_touch_updated_at
before update on public.app_settings
for each row execute function public.touch_updated_at();

drop trigger if exists access_codes_touch_updated_at on public.access_codes;
create trigger access_codes_touch_updated_at
before update on public.access_codes
for each row execute function public.touch_updated_at();

alter table public.products enable row level security;
alter table public.orders enable row level security;
alter table public.app_settings enable row level security;
alter table public.access_codes enable row level security;
alter table public.feedback_messages enable row level security;

drop policy if exists "authenticated products access" on public.products;
create policy "authenticated products access"
on public.products
for all
to authenticated
using (true)
with check (true);

drop policy if exists "authenticated orders access" on public.orders;
create policy "authenticated orders access"
on public.orders
for all
to authenticated
using (true)
with check (true);

drop policy if exists "private customer order submit" on public.orders;
create policy "private customer order submit"
on public.orders
for insert
to anon
with check (true);

drop policy if exists "authenticated settings access" on public.app_settings;
create policy "authenticated settings access"
on public.app_settings
for all
to authenticated
using (true)
with check (true);

drop policy if exists "authenticated access code access" on public.access_codes;
create policy "authenticated access code access"
on public.access_codes
for all
to authenticated
using (true)
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

-- Explicit API grants for new Supabase public schema behavior.
-- RLS policies above still decide which rows each role can use.
grant usage on schema public to anon, authenticated;
grant select, insert, update, delete on public.products to authenticated;
grant select, insert, update, delete on public.orders to authenticated;
grant insert on public.orders to anon;
grant select, insert, update, delete on public.app_settings to authenticated;
grant select, insert, update, delete on public.access_codes to authenticated;
grant select, insert, update, delete on public.feedback_messages to authenticated;
grant insert on public.feedback_messages to anon;

-- Optional public image bucket for uploaded menu/brand/promo photos.
insert into storage.buckets (id, name, public)
values ('app-images', 'app-images', true)
on conflict (id) do nothing;

drop policy if exists "authenticated image uploads" on storage.objects;
create policy "authenticated image uploads"
on storage.objects
for insert
to authenticated
with check (bucket_id = 'app-images');

drop policy if exists "authenticated image updates" on storage.objects;
create policy "authenticated image updates"
on storage.objects
for update
to authenticated
using (bucket_id = 'app-images')
with check (bucket_id = 'app-images');

drop policy if exists "public image reads" on storage.objects;
create policy "public image reads"
on storage.objects
for select
to anon, authenticated
using (bucket_id = 'app-images');
