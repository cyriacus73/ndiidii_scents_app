# Ndiidii Scents — V2 Scope: Customer Accounts & Identity (Supabase)

## Why this is more than "adding a login button"

The store was deliberately built account-free. Today:

- **There is no database.** The product catalog lives in a Google Sheet (read-only); order state lives in a short-lived Redis cache (24-hour expiry); the cart lives in the visitor's browser.
- **There is no identity system.** No logins, no sessions, no user records.
- **Order history lives in Paystack**, not in our own system.
- **There is no sending domain.** The store runs on a shared `vercel.app` subdomain, so branded email (login links, receipts) has no domain to send *from*.

Adding customer accounts means introducing, from scratch, a **persistent database**, an **authentication & session layer**, a **branded email pipeline**, and the **user-facing screens and flows** around them — then wiring it into the existing guest checkout and migrating hosting without breaking payments. Each line below is a concrete piece of work.

---

## 1. Infrastructure & foundation

- [ ] Provision Supabase project (Auth + Postgres database + storage)
- [ ] Generate and secure API keys (public + service role)
- [ ] Configure secrets across development and production
- [ ] Add Supabase SDK + server-side session libraries to the app
- [ ] Set up the shared client (browser + server variants)

## 2. Session management (the hard, invisible part)

- [ ] Cookie-based sessions (secure, httpOnly, signed)
- [ ] Automatic token refresh so users stay logged in without being nagged
- [ ] Route protection — server-side guard on account pages
- [ ] Correct "logged in vs logged out" rendering on the very first page load (no flicker)
- [ ] Sign-out and session invalidation

## 3. Authentication flows

- [ ] Email + password sign-up (with confirmation email)
- [ ] Passwordless "magic link" login (recommended default)
- [ ] Google sign-in (optional — provider setup + redirect handling)
- [ ] Email verification + "resend link"
- [ ] Forgot-password / reset-password flow
- [ ] Error handling for every branch: wrong password, expired link, already-registered, rate-limited

## 4. Database & security

- [ ] `profiles` table (name, email, phone, timestamps)
- [ ] Automatic profile creation when a user signs up
- [ ] Row-Level Security (RLS) policies so one customer can never read another's data
- [ ] Table hooks to attach orders and gift cards to an account later (the "order history" foundation)

## 5. Customer-facing screens

- [ ] Sign-in page
- [ ] Sign-up page
- [ ] "Check your email" screen (magic link / verification)
- [ ] Verify / redirect handler page
- [ ] Forgot-password + reset-password pages
- [ ] Account page (view & edit name, phone, email)
- [ ] Header account state (avatar + sign-out, or "Sign in" button)
- [ ] Loading, redirect, and error states across all of the above
- [ ] Mobile / responsive pass

## 6. Integration with the existing store

- [ ] Keep guest checkout fully working (accounts must not force sign-in)
- [ ] Pre-fill checkout with the account's saved name/phone/email
- [ ] Allow linking a completed order or gift card to the account
- [ ] Confirm Paystack payment flows work for both guests and signed-in customers

## 7. Email delivery (custom domain + SMTP)

- [ ] Purchase and register a sending domain (shared with the storefront)
- [ ] Set up a Resend account and verify the domain
- [ ] Add SPF + DKIM DNS records (provided by Resend) so mail passes authentication
- [ ] Add a DMARC record
- [ ] Generate Resend SMTP credentials (username + password)
- [ ] Configure Supabase Auth "Custom SMTP" with Resend's credentials
- [ ] Brand the email templates (confirmation, magic link, password reset, email change)
- [ ] Set the "From" address on the store's domain (e.g. `no-reply@ndiidii.com`)
- [ ] Upgrade Supabase to Pro — custom SMTP requires a paid plan
- [ ] Verify deliverability (emails land in inbox, not spam)

## 8. Domain & hosting migration (Railway)

- [ ] Point the custom domain's DNS at Railway
- [ ] Create the Railway project and deploy the app
- [ ] Set production environment variables (Supabase, Paystack, Google Sheets, Cloudinary, Redis, Resend)
- [ ] Configure Supabase "Site URL" + "Redirect URLs" for the new domain
- [ ] Re-point the Paystack callback and webhook URLs to the new domain
- [ ] Custom-domain SSL verification
- [ ] Regression test checkout + payments on the new domain

## 9. Compliance & hardening

- [ ] NDPR (Nigeria data-protection) basics for storing customer data
- [ ] Rate-limiting on auth endpoints (brute-force protection)
- [ ] Session/security configuration review

## 10. Testing & deployment

- [ ] Happy path: sign up → verify → sign in → account
- [ ] Magic-link and password-reset paths
- [ ] Session expiry and refresh behaviour
- [ ] Multi-device / multi-tab behaviour
- [ ] Email deliverability check on the live domain
- [ ] Regression test: existing guest checkout, builders, gift cards, payments all still work
- [ ] Production environment variables + redirect allowlist
- [ ] Staging → production promotion

---

**Net:** ~55 discrete deliverables across 10 workstreams — the store's first database, its identity layer, a branded email pipeline, and a hosting migration.

- **Auth proper:** 6–9 development days
- **Email + domain + Railway migration:** ~3–4 more days
- **Recurring costs it unlocks:** Railway ~$5–15/mo · domain ~$12/yr · Supabase Pro ~$25/mo · Resend $0 (free tier to start)
