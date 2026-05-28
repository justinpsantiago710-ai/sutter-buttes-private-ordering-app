-- Safe member order lookup by exact order number.
-- This does not expose the full orders table and returns only customer-safe fields.

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

drop function if exists public.lookup_member_order(text);

create or replace function public.lookup_member_order(
  order_number_input text
)
returns table (
  order_number text,
  customer_name text,
  phone text,
  customer_email text,
  contact_method text,
  delivery_option text,
  delivery_window text,
  customer_visible_message text,
  estimated_delivery_time text,
  estimated_delivery_date text,
  completed_at timestamptz,
  denied_reason_customer text,
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
  created_at timestamptz,
  updated_at timestamptz
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
    coalesce(o.customer_visible_message, '') as customer_visible_message,
    coalesce(o.estimated_delivery_time, '') as estimated_delivery_time,
    coalesce(o.estimated_delivery_date, '') as estimated_delivery_date,
    o.completed_at,
    coalesce(o.denied_reason_customer, '') as denied_reason_customer,
    '[]'::jsonb as items,
    o.status,
    ''::text as admin_note,
    0::numeric as subtotal,
    0::numeric as discount,
    0::numeric as bundle_discount,
    0::numeric as tax,
    0::numeric as delivery_fee,
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
    o.created_at,
    o.updated_at
  from public.orders o
  where upper(o.order_number) = upper(order_number_input)
  limit 1;
$$;

grant usage on schema public to anon, authenticated;
revoke select, update, delete on public.orders from anon;
grant insert on public.orders to anon;
grant execute on function public.lookup_member_order(text) to anon, authenticated;

-- Safe approved-member lookup by exact order number and the active member key.
-- This prevents one approved member from retrieving another member's receipt.
drop function if exists public.lookup_member_owned_order(text, text, text);

create or replace function public.lookup_member_owned_order(
  order_number_input text,
  member_id_input text,
  member_code_input text
)
returns table (
  order_number text,
  customer_name text,
  phone text,
  customer_email text,
  contact_method text,
  delivery_option text,
  delivery_window text,
  customer_visible_message text,
  estimated_delivery_time text,
  estimated_delivery_date text,
  completed_at timestamptz,
  denied_reason_customer text,
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
  created_at timestamptz,
  updated_at timestamptz
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
    coalesce(o.customer_visible_message, '') as customer_visible_message,
    coalesce(o.estimated_delivery_time, '') as estimated_delivery_time,
    coalesce(o.estimated_delivery_date, '') as estimated_delivery_date,
    o.completed_at,
    coalesce(o.denied_reason_customer, '') as denied_reason_customer,
    '[]'::jsonb as items,
    o.status,
    ''::text as admin_note,
    0::numeric as subtotal,
    0::numeric as discount,
    0::numeric as bundle_discount,
    0::numeric as tax,
    0::numeric as delivery_fee,
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
    o.created_at,
    o.updated_at
  from public.orders o
  where upper(o.order_number) = upper(order_number_input)
    and (
      (coalesce(member_code_input, '') <> '' and upper(o.member_code) = upper(member_code_input))
      or (auth.role() = 'authenticated' and coalesce(member_id_input, '') <> '' and o.member_id = member_id_input)
    )
  limit 1;
$$;

-- Safe approved-member receipts. Returns only the active member's recent completed orders.
drop function if exists public.lookup_member_recent_receipts(text, text, integer);

create or replace function public.lookup_member_recent_receipts(
  member_id_input text,
  member_code_input text,
  limit_count integer default 5
)
returns table (
  order_number text,
  customer_name text,
  phone text,
  customer_email text,
  contact_method text,
  delivery_option text,
  delivery_window text,
  customer_visible_message text,
  estimated_delivery_time text,
  estimated_delivery_date text,
  completed_at timestamptz,
  denied_reason_customer text,
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
  created_at timestamptz,
  updated_at timestamptz
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
    coalesce(o.customer_visible_message, '') as customer_visible_message,
    coalesce(o.estimated_delivery_time, '') as estimated_delivery_time,
    coalesce(o.estimated_delivery_date, '') as estimated_delivery_date,
    o.completed_at,
    coalesce(o.denied_reason_customer, '') as denied_reason_customer,
    '[]'::jsonb as items,
    o.status,
    ''::text as admin_note,
    0::numeric as subtotal,
    0::numeric as discount,
    0::numeric as bundle_discount,
    0::numeric as tax,
    0::numeric as delivery_fee,
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
    o.created_at,
    o.updated_at
  from public.orders o
  where o.status = 'Completed'
    and (
      (coalesce(member_code_input, '') <> '' and upper(o.member_code) = upper(member_code_input))
      or (auth.role() = 'authenticated' and coalesce(member_id_input, '') <> '' and o.member_id = member_id_input)
    )
  order by coalesce(o.updated_at, o.created_at) desc
  limit least(greatest(coalesce(limit_count, 5), 1), 5);
$$;

grant execute on function public.lookup_member_owned_order(text, text, text) to anon, authenticated;
grant execute on function public.lookup_member_recent_receipts(text, text, integer) to anon, authenticated;
