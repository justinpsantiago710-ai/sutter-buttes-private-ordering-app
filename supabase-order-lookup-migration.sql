-- Adds privacy-aware customer order lookup by order number and phone last 4.
-- Run this once in Supabase SQL Editor after the original schema.

create or replace function public.lookup_customer_order(
  order_number_input text,
  phone_input text
)
returns table (
  order_number text,
  customer_name text,
  phone text,
  customer_email text,
  contact_method text,
  delivery_option text,
  delivery_window text,
  items jsonb,
  status text,
  admin_note text,
  subtotal numeric,
  discount numeric,
  bundle_discount numeric,
  tax numeric,
  delivery_fee numeric,
  admin_discount numeric,
  total numeric,
  promo_code text,
  promo_label text,
  activity jsonb,
  created_at timestamptz
)
language sql
security definer
set search_path = public
as $$
  select
    o.order_number,
    ''::text as customer_name,
    ''::text as phone,
    ''::text as customer_email,
    ''::text as contact_method,
    o.delivery_option,
    o.delivery_window,
    '[]'::jsonb as items,
    o.status,
    ''::text as admin_note,
    0::numeric as subtotal,
    0::numeric as discount,
    0::numeric as bundle_discount,
    0::numeric as tax,
    o.delivery_fee,
    0::numeric as admin_discount,
    o.total,
    ''::text as promo_code,
    ''::text as promo_label,
    coalesce(
      (
        select jsonb_agg(jsonb_build_object(
          'at', entry->>'at',
          'action', entry->>'action'
        ))
        from jsonb_array_elements(coalesce(o.activity, '[]'::jsonb)) as entry
      ),
      '[]'::jsonb
    ) as activity,
    o.created_at
  from public.orders o
  where lower(o.order_number) = lower(order_number_input)
    and right(regexp_replace(o.phone, '\D', '', 'g'), 4) = right(regexp_replace(phone_input, '\D', '', 'g'), 4)
  limit 1;
$$;

grant usage on schema public to anon, authenticated;
grant execute on function public.lookup_customer_order(text, text) to anon, authenticated;
