# MeasureGH Website V3 — Architecture

## Core principle

The public website is a **publication layer**, not the research database.

```text
P1C-A identity authority + P1C-B evidence authority
                    ↓
          deterministic data build
                    ↓
           public JSON records
                    ↓
          Astro static generation
                    ↓
      GitHub Pages / any static host
```

The Excel workbooks remain auditable scientific authorities. They are not read by the website at runtime and are ignored by Git by default.

## Why static Astro

- Real URLs for measures, families and public navigation.
- No server, database, CMS or API needed for the prototype.
- Fast, accessible HTML by default.
- Client-side JavaScript is confined to filtering, comparison and Help Me Choose.
- GitHub Pages compatible, including repository sub-paths.
- Easy to move later to Cloudflare Pages, Netlify, Vercel or an institutional host.

## Public data model

`src/data/objects.json`
: 446 mapped P1C-B eligible objects. Identity, public mapping, constructs, evidence status and public synthesis are merged per object.

`src/data/families.json`
: 44 derived public families with members and family synthesis where available.

`src/data/constructs.json`
: 163 specific constructs and definitions.

Evidence remains normalized in separate files:

- `references.json`
- `reference-links.json`
- `findings.json`
- `applications.json`
- `resources.json`
- `programmes.json`

Type-specific calibration outputs are separate from the common evidence backbone:

- `spec-requirements.json`
- `v3-refinements.json`

## Public catalogue behaviour

The backend contains 446 eligible objects, but V3 does not present all 446 as equivalent top-level cards.

- `browse_independently = YES` → visible in the default Browse catalogue.
- Nested variants/components remain discoverable by turning on **Show nested variants/components** and through family/detail pages.
- Evidence status is visible: calibrated records show **Evidence characterised**; unprocessed records show **Mapped; evidence pending**.
- Internal P1C-A/P1C-B IDs are used for joins but deliberately not displayed as public identifiers.

## Comparison and Help Me Choose

Both use locked eligibility flags.

- Compare is descriptive side-by-side comparison only.
- Help Me Choose applies explicit filters only.
- Neither computes a score, weighted ranking or “best measure”.

## URL model

- `/browse/`
- `/measure/<human-readable-slug>/`
- `/family/<human-readable-slug>/`
- `/constructs/`
- `/compare/`
- `/choose/`
- `/methodology/`

Slugs are publication conveniences, not permanent MeasureGH IDs.

## Refreshing after P1C-B1

When the production schema is frozen, later evidence batches should not require hand editing pages. Run the data build against the newer cumulative workbooks, validate, build and redeploy.

```bash
npm run data:build -- source/P1C-B.xlsx source/P1C-A.xlsx
npm run validate
npm run build
```
