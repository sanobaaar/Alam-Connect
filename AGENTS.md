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

## Key Files
- `vite.config.js` — has `server.host: true` and `allowedHosts: true` for the preview proxy.
- `docker-compose.base44.yml` — the dev runbook.
