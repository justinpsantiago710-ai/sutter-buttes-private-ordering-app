-- Adds per-order compliance checklist data.
-- Run this once in Supabase SQL Editor after the original schema.

alter table public.orders
add column if not exists compliance jsonb not null default '{}'::jsonb;

grant usage on schema public to anon, authenticated;
grant insert on public.orders to anon;
grant select, insert, update, delete on public.orders to authenticated;
