# MeasureGH — Website V3

Static, data-driven prototype for **MeasureGH: The Gambling Harms Measurement Toolkit**.

## What is in this V3

- All 446 P1C-B-eligible mapped objects available to the architecture.
- 44 public family records and 163 construct records.
- Full P1C-B evidence pages for the 23 completed calibration exemplars.
- Browse with approach/specificity/evidence filters and optional nested variants/components.
- Family pages.
- Construct browser.
- Side-by-side Compare (no scoring).
- Help Me Choose as transparent filtering (no ranking).
- Type-aware specification panels for Methods, Indicators and Qualitative approaches.
- Evidence findings, applications, implementation resources and references kept separate.
- GitHub Pages deployment workflow.

## Architecture

The research workbooks remain the audit authorities. The website consumes a generated publication layer:

`P1C-A + P1C-B workbooks → build-data.mjs → JSON → Astro static pages`

The generated JSON is committed, so the public site does **not** require Excel, a database or a backend. The source workbooks are intentionally ignored by Git.

## Run locally

Requires Node 22+.

```bash
npm install
npm run dev
```

Production check:

```bash
npm run build
npm run preview
```

## Put it on GitHub Pages

1. Create an empty GitHub repository (for example `measuregh`).
2. Copy this repository into it and push to the `main` branch.
3. In **Settings → Pages**, set **Source** to **GitHub Actions**.
4. The included `.github/workflows/deploy-pages.yml` builds with the repository sub-path automatically.
5. Future pushes to `main` redeploy the site.

No host-specific code is required; the same static `dist/` output can also be deployed to Cloudflare Pages, Netlify or Vercel.

## Refresh the data later

The current repo already contains the generated JSON from the post-calibration v1.6 workbook. To rebuild from later workbooks, see `source/README.md`.

## Important prototype boundary

Only the 23 calibration exemplars currently have full P1C-B evidence characterisation. Other mapped records deliberately show an **Evidence pending** state rather than inventing public evidence.
