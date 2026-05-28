# Sutter Buttes Cannabis Co. Delivery Prototype

This workspace contains a browser-runnable prototype for Sutter Buttes Cannabis Co., a legal cannabis dispensary delivery app concept that can later become an iPhone and Android app.

Open `index.html` in a browser to try it. The prototype includes:

- Customer shopping, search, category filtering, cart, and checkout entry point.
- Private access-code gate before the menu is visible.
- Menu/catalog admin tools for adding, pausing, resetting, and removing products.
- Fulfillment queue for delivery orders.
- Brand styling inspired by the Sutter Buttes logo: cream base, dark green, muted gold, mountain/sun mark, and bold all-caps type.

## Production Path

A production cross-platform cannabis delivery app should be built with React Native and Expo so the same app can ship to both the Apple App Store and Google Play Store, subject to each store's cannabis-related policies and your local licensing requirements.

Recommended production pieces:

- Customer mobile app for iPhone and Android.
- Backend-validated invite/access codes so the private menu cannot be bypassed.
- Age gate and ID verification flow.
- Storefront menu with product categories, potency details, inventory, and pricing.
- Admin catalog manager so you can add, remove, pause, and edit products often without submitting a new app version.
- Fulfillment tools for order acceptance, preparation, driver handoff, and delivery status.
- Backend services for accounts, orders, payments, taxes, compliance logs, inventory, routing, and notifications.
- Secure admin login and backend roles. Front-end-only access codes are for prototype testing only.
- Shared database/storage so menu edits, order statuses, uploaded product photos, inventory, promos, and access codes sync across every tester.

Recommended next steps:

1. Choose React Native/Expo for iPhone and Android from one codebase.
2. Confirm the exact state, city, and delivery rules before finalizing checkout, payment, and delivery flows.
3. Define user roles: customer, staff/admin, driver, compliance/support admin.
4. Design backend entities: users, products, inventory, carts, orders, delivery zones, taxes, compliance events.
5. Store menu/catalog data in a backend database so changes show up instantly in both mobile apps.

## Prototype Access

Customer test code: `BUTTES2026`

Admin test code: `ADMIN2026`

This is only a front-end prototype gate. A production app should validate access codes on the backend before returning private menu, pricing, inventory, or ordering data.

## Netlify Email Alerts

The app includes two Netlify Forms hooks:

- `order-alert`: sent when a customer submits an order.
- `customer-message-alert`: sent when a customer sends a message from the feedback form.

After deploying to Netlify, open your Netlify site dashboard and go to **Forms**. Once Netlify detects the forms, add email notifications for both forms so new orders and customer messages go to your phone-connected email inbox.
