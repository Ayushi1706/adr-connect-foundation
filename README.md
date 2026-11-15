# ADR CONNECT – Foundation Starter

React + TypeScript + Vite frontend, Tailwind CSS, Supabase Auth and PostgreSQL.

## Requirements
- Node.js LTS (20+ recommended)
- npm
- Supabase project

## Install and run
```bash
npm install
cp .env.example .env.local
# Edit .env.local with Supabase Project URL and anon/public key
npm run dev
```

## Database setup
In Supabase SQL Editor, run in order:
1. `supabase/migrations/001_foundation.sql`
2. `supabase/migrations/002_security_policies.sql`

Then configure Supabase Auth email verification, redirect URLs and SMTP. Supabase Auth owns passwords; this app does not store password hashes in public tables. Never expose the Supabase service-role key in browser code.

## Build
```bash
npm run typecheck
npm run build
```

## Included
- Accessible, responsive, senior-friendly public dashboard
- Sign-up and sign-in screens
- Supabase client and auth context
- Protected starter dashboard
- Email/password client validation examples
- Initial identity, capabilities, institutional affiliation, matter, membership and role schema
- Baseline Row Level Security policies

## Not production-ready
This is a foundation for developer implementation, not a live ADR system. Review and test every RLS policy, server-side authorisation rule, account activation workflow, MFA enrolment/challenge, invitation flow, audit mechanism and backup policy before production. Add privileged workflows through trusted server-side functions/Edge Functions. Do not store live confidential arbitration documents or deliberations in this starter.
