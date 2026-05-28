-- Adds team fulfillment fields to an existing Sutter Buttes Supabase project.
-- Run this once in Supabase SQL Editor if you already ran the first schema.

alter table public.orders
add column if not exists assigned_to text default '';

alter table public.orders
add column if not exists activity jsonb not null default '[]'::jsonb;

insert into public.app_settings (key, value)
values ('team_members', '[]'::jsonb)
on conflict (key) do nothing;

grant usage on schema public to anon, authenticated;
grant select, insert, update, delete on public.orders to authenticated;
grant insert on public.orders to anon;
grant select, insert, update, delete on public.app_settings to authenticated;
