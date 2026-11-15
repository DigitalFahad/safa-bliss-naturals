# Safa Bliss Naturals — Shopify Replacement (Development)
Source: official Shopify CSV exports (14 total, 11 active), 25 published Judge.me reviews, original Sense theme reference, live storefront screenshots.

**This branch is a development preview, NOT the production store.** Checkout is disabled, orders and customer data are never collected. Do not connect safabliss.pk or cancel Shopify.

## Stack
- React 19 + Vite 7 + React Router, using existing repository dependencies
- Product/variant data and published reviews copied from existing Safa Bliss migration files
- Local cart only; no live inventory, payments or checkout
- Planned production: Cloudflare Workers + D1 + R2 + Resend, server-side order creation with price/discount/shipping validation
- This repository is currently public. **Never commit customer exports, order exports, API keys or credentials.**

## Run
npm ci
npm run dev
npm run build

## Routes
/ /products /collections/:slug /products/:handle /cart /checkout-preview /reviews /our-story /faq

## Migration/launch blockers
1. Independently host the original logo and all product/review images (currently external assets).
2. Recreate original video testimonials, custom homepage/Trio blocks, About/Our Story and approved policies without fabricated content.
3. Validate inventory, shipping by city, discount codes (e.g. Sum10), tax and COD/manual payment rules.
4. Implement backend API and D1 order storage with robust validation, rate limits, bot protection, idempotency, safe retries, authenticated admin access, backups and order emails.
5. Migrate historical orders/customers securely OFF GitHub. Do not put personally identifiable data in public frontend.
6. Build server-rendered or prerendered public routes and redirects before migration to preserve SEO. Vite SPA preview is not SEO-equivalent to Shopify.
7. Review mobile UX, accessibility, page performance, regression tests and secure launch checklist.
8. Keep Shopify live until full end-to-end test orders have succeeded.

## Deployment
This is a Vite SPA frontend preview; for temporary Cloudflare Pages static hosting use build command \`npm run build\`, output \`dist\`. Add SPA fallback handling if route refreshing is not working. Do not enable real checkout until API + security are complete.

## Data integrity
Product prices and variants came from Shopify exports. Product images currently point to Shopify CDN. Review images remain on Judge.me, with no unsupported "verified buyer" badge. The original uploaded product descriptions are displayed as escaped text, not injected as HTML, to avoid XSS.
