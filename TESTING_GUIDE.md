# Private Testing Guide

This prototype is a private web app package for testing the Sutter Buttes delivery flow.

## Access Codes

Customer test code:

`BUTTES2026`

Admin test code:

`ADMIN2026`

## Testing On This Computer

Open the local preview URL while the preview server is running:

`http://127.0.0.1:5180/`

## Testing With A Friend

The `127.0.0.1` URL only works on the computer running the app. A friend cannot open that exact link from their phone.

For private phone testing, use one of these options:

1. Upload the project to a private or unlisted web host with HTTPS.
2. Send your friend the hosted HTTPS link and the access code.
3. On iPhone or Android, they can open the link in their browser and add it to their home screen.

Free or low-cost hosting options for early testing include Netlify, Vercel, Cloudflare Pages, or GitHub Pages. Keep the link private and keep the access-code gate enabled.

## What To Test

- Unlock screen with customer and admin access codes.
- Customer code should only allow Customer view.
- Admin code should allow Admin view and customer view.
- Shop category filters.
- Add-to-cart behavior.
- Menu item editing.
- Product image upload.
- Product description editing.
- Front page text editing.
- Promo and logo changes.
- Lock button.

## Production Note

This prototype stores edits in the current browser only. A real shared test app needs backend storage so products, promos, access codes, and images sync for every tester.
