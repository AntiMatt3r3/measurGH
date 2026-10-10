# Source workbooks (not required for deployment)

The repository ships with generated public JSON, so GitHub Pages can build without the research workbooks.

To regenerate the public data layer later, place the current P1C-B and P1C-A workbooks in this folder (they are ignored by Git by default) and run:

```bash
npm run data:build -- source/P1C-B.xlsx source/P1C-A.xlsx
npm run validate
```

The public site consumes `src/data/*.json`; it does not read Excel files at runtime.
