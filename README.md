# Asher Mining — Next.js 14 + TypeScript + Tailwind

Professional, futuristic dark-mode landing site for a Bitcoin mining and consulting company.

## Tech
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Next.js Metadata API (SEO)
- next/font (Inter + Orbitron)
- Firebase Admin SDK (server-side Firestore)

## Getting Started
```bash
# Install deps
npm install

# Run dev
npm run dev

# Build
npm run build
npm start
```

## Structure
- `app/` — App Router, pages and components
- `app/api/contact/route.ts` — POST handler for contact form
- `app/components/*` — Reusable UI sections
- `app/layout.tsx` — SEO metadata via Next.js Metadata API
- `utils/backend-placeholders.ts` — Stubs for future Supabase/Firebase wiring

## Firebase Setup

The contact form is configured to save submissions to Firebase Firestore. To set it up:

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Firestore Database (Native mode)
3. Create a service account:
   - Go to Project Settings > Service Accounts
   - Click "Generate New Private Key" and download the JSON
4. Add environment variables to `.env.local`:
   ```bash
   # Copy .env.local.example to .env.local and fill in your credentials
   FIREBASE_SERVICE_ACCOUNT_KEY='{"type":"service_account",...}'  # Entire JSON as single string
   ```

Alternatively, you can use Application Default Credentials by setting:
```bash
NEXT_PUBLIC_FIREBASE_PROJECT_ID='your-project-id'
GOOGLE_APPLICATION_CREDENTIALS='/path/to/service-account-key.json'
```

The contact form will gracefully fall back to console logging if Firebase is not configured.

## Theming
- Dark mode enforced via `html.dark`
- Accent colors: deep blue + neon gold
