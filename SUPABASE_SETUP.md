# Supabase Setup

This is the recommended next step for shared testing. It lets products, orders, promos, photos, delivery settings, and access codes sync between devices instead of staying inside one browser.

## Why Supabase

- Free tier is enough for early private testing.
- It includes Postgres database, auth, realtime updates, and image storage.
- It works with a mobile web app/PWA without publishing to app stores.

## Setup Steps

1. Create a free Supabase project.
2. Open the Supabase SQL Editor.
3. Paste and run `supabase-schema.sql`.
4. Go to Project Settings -> API.
5. Copy your project URL and publishable/anon key.
6. Copy `backend-config.example.js` to `backend-config.js`.
7. Paste your Supabase URL and publishable/anon key into `backend-config.js`.
8. In Supabase Auth, create an admin test user with email/password.
9. In the app, enter the admin code, open Admin -> Backend, and sign in.
10. Use "Push this browser data" the first time to seed Supabase with your current menu/settings.
11. On another phone/computer, sign in and use "Pull latest" to load the shared data.

If you already ran the original schema before team roles were added, run `supabase-team-migration.sql` once too. It adds order assignment, activity history, and team-member settings.

If you already ran the schema before customer alerts/feedback were added, run `supabase-notifications-feedback-migration.sql` once too. It lets customers submit orders and feedback messages from their own devices while admins stay signed in separately.

If you already ran the schema before customer order recovery was added, run `supabase-order-lookup-migration.sql` once too. It lets customers recover an order with their order number and phone number.

Run `supabase-member-order-lookup.sql` after Member Access is enabled. It adds safe exact order lookup and member-only recent receipt RPCs, plus explicit grants for Supabase's newer API requirements.

Separate customer tester/VIP codes are deprecated. Use the Weekly Guest Code for temporary access and approved Member Codes for returning members. The legacy `supabase-invite-codes-migration.sql` file is kept only as a no-op compatibility note.

If you already ran the schema before compliance checklists were added, run `supabase-compliance-migration.sql` once too. It stores ID/contact/cash/packing/handoff checks on each order.

Never place the `service_role` key in browser code. That key bypasses security rules.

## Tables Created

- `products`: menu items, categories, brands, variants, stock, photos, active/paused state.
- `orders`: customer order requests, status, admin notes, delivery window, discounts, cash totals.
- `app_settings`: front page, design, promo, delivery settings, team roles.
- `access_codes`: weekly guest code and staff/admin access codes.
- `feedback_messages`: customer questions, feedback, and callback requests.
- `app-images` storage bucket: product, logo, hero, and promo images.

## Image Uploads

Admins should sign in under Admin -> Backend before uploading product photos, hero slides, logos, or promo banners. When signed in, uploaded files go to Supabase Storage and the app saves public image URLs. If Supabase is not signed in yet, the app still previews/saves the image locally for testing, but that is not ideal for sharing across devices.

## Email Alerts

The Netlify deploy includes form hooks for `order-alert` and `customer-message-alert`. In Netlify, open your site dashboard, go to Forms, and add email notifications for both forms. New customer orders and customer messages will then send email alerts to the address you choose.

## Security Shape

The starter schema enables Row Level Security and includes explicit grants for Supabase Data API access. That is good enough for private testing with you and a friend.

For production, split roles further:

- Customers can read the menu and create their own orders.
- Customers can only see their own order status.
- Admins can edit products, promos, access codes, settings, and all orders.
- Drivers can only update delivery status/location for assigned orders.

## What Still Needs Wiring

The current app still uses `localStorage` as the offline fallback. The next coding pass should add:

- Supabase realtime subscriptions instead of timed live refresh

Keep localStorage as a fallback so the app still works when offline or before backend keys are added.
