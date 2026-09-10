# Star Travel — Base44 Dev Environment

## Overview
Frontend-only React 19 + Vite 8 app ("Star Travel" travel agency landing page).
No backend, no database, no external credentials required.

## Running
```bash
docker compose -f docker-compose.base44.yml up -d
```
- Dev server runs on port 5173 inside the container, mapped to host port 3000.
- Vite HMR is active; edits to source files appear live in the preview.
- `node_modules` is stored in a named volume to avoid host/platform conflicts.

## Verifying
- `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/` should return 200.
- The served HTML includes `/@vite/client` and `/src/main.jsx` (dev mode, not prebuilt).

## Routing
- `react-router-dom` provides client-side routing.
- `/` — home page (Hero, TrustBar, Services cards).
- `/enquiry/:id` — enquiry form page for a specific service. 8 services total, each with tailored fields.
- Service card data (fields, images, routes) lives in `src/data/serviceForms.js`.
- `src/components/EnquiryForm.jsx` — reusable form, submits to Google Sheets via `VITE_GOOGLE_SCRIPT_URL`.
- `src/pages/ServiceEnquiry.jsx` — page wrapper that looks up the service by id and renders the form.

## Google Sheets Submission
- The form POSTs FormData (with a `data` JSON field) to the Google Apps Script Web App URL stored in `VITE_GOOGLE_SCRIPT_URL`.
- Uses `mode: 'no-cors'` since Google Apps Script doesn't support CORS preflight.
- Secret is delivered via `/run/base44/app.env` (compose `env_file`), with `.env.base44-defaults` providing an empty fallback so the app boots without it.

## Key Files
- `vite.config.js` — has `server.host: true` and `allowedHosts: true` for the preview proxy.
- `docker-compose.base44.yml` — the dev runbook.
- `.env.base44-defaults` — placeholder env file (VITE_GOOGLE_SCRIPT_URL=).
