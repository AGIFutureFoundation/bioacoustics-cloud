# WAVE — Wild Animal Voice Engine (bioacoustics.cloud)

Static site for the WAVE bioacoustics platform. Content migrated from the live
Vercel-hosted site. Pure HTML + CSS + JS, no build step — deploy-ready for Vercel.

## Deploy
```bash
vercel          # preview deploy
vercel --prod   # production
```
Then add the custom domain (`bioacoustics.cloud`) in the Vercel dashboard
(Settings → Domains). DNS is managed at Hostinger: apex ALIAS → `cname.vercel-dns.com`,
www → `cname.vercel-dns.com`.

## TODO
- [ ] Wire the contact form to a backend (Formspree / Vercel Function)
- [ ] Fill in `data-youtube-id` attributes on embed cards
- [ ] Replace `#` placeholders in footer social links with real profile URLs
