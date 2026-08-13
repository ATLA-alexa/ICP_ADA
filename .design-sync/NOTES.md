# design-sync notes — @car-ibiza/ui

Repo-specific gotchas for future syncs. Read this before re-running.

## Origin

This repo was **empty** (no commits, no branches) when the first sync ran. The
design system was scaffolded from scratch in that session against the Car-Ibiza
brief (Ibiza × Morocco, minimalist, calm, non-invasive colour, gold accents,
"the room is a calm canvas, the drinks are the paint"). It is not an import of a
pre-existing library, so there is no upstream to reconcile against.

## Environment

- **`DesignSync` could not authorize in this session.** The tool reported that
  `/design-login` needs an interactive terminal and is unavailable on
  claude.ai/code, suggesting Claude Design's "Send to Claude Code Web" instead.
  **Nothing has been uploaded yet and no project exists** — so there is no
  `projectId` in `config.json` and the first real sync is still a first sync.
- **`git push` returns 403** through the session's git proxy. The token has read
  access to `ATLA-alexa/ICP_ADA` but not write. Commits exist locally only.
- Playwright is **not** installed by default, but chromium build **1194** is
  pre-installed at `/opt/pw-browsers`. That build is pinned by
  **playwright 1.56.0** — install exactly that version into `.ds-sync/` with
  `PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1`, or `browserType.launch` fails with
  "Executable doesn't exist".

## Build

- `npm run build` → `dist/index.js` (ESM, React external), `dist/index.d.ts`,
  `dist/styles.css`. Converter entry is `--entry ./dist/index.js`,
  `--node-modules ./node_modules`.
- CSS is deliberately **not** imported from the `.tsx` files. The package ships
  one stylesheet assembled by `src/styles/index.css`; `tsc` therefore needs no
  CSS module shims. **If you add a component, add its `.css` to that import list**
  or its styles silently never ship.
- `cfg.tokensGlob` was removed: `copyTokens` only applies to a *sibling* tokens
  package in `node_modules`, and these tokens live inside the DS package itself.
  `ds-bundle/tokens/` is therefore empty and that is correct — all 72 tokens
  reach designs through the `styles.css` → `_ds_bundle.css` closure, which is the
  invariant that actually matters. Don't re-add the key.

## Fonts

Cormorant Garamond (display) + Inter (text), SIL OFL 1.1, self-hosted as
**variable** woff2. Google's css2 API returns one file per weight but they are
byte-identical per subset, so the fetch script dedupes to 4 files (latin +
latin-ext per family) and declares `font-weight: 400 600` once. Regenerating
naively gives 12 files, 3 of each — dedupe if you refetch.

`Iowan Old Style` was removed from `--ci-font-display` — it is macOS-only, cannot
ship, and tripped `[FONT_MISSING]`. Georgia already covers that fallback slot.
**Don't add system fonts that aren't in the validator's known list.**

## Bugs found during preview verification

Both were real component defects caught by reading the render sheets, not by any
automated check:

1. **`Ornament variant="lattice"` was distorted.** `preserveAspectRatio="none"`
   on a stretched viewBox flattened the tiles into lozenges. Fixed by dropping
   the viewBox and tiling the pattern in real pixels, with the tile size and band
   height both driven by `LATTICE_TILE` in the component so they cannot drift.
2. **`inverse` double-inverted.** `MenuHeader inverse` inside
   `theme="evening"` rendered dark-on-dark, because `--ci-ink-inverse` is *dark*
   in the evening token set by definition. `MenuHeader --inverse` now paints its
   own `--ci-surface-inverse` background so the pair is always self-consistent.
   `Wordmark tone="inverse"` was left as-is (ink only, correct semantics) and its
   preview was fixed instead. This asymmetry is deliberate — it is documented in
   `conventions.md` under "Two things that will bite you".

Also: SVG `<pattern>` ids must be per-instance (`useId`), or several lattices on
one page all resolve to the first one's fill.

## Known render warns

Record any warn you decide is legitimate here, so re-syncs can tell new from
known. Currently:

- **`Divider` Tones** — `line` / `strong` / `brass` are close in value. Real
  difference, subtle by palette design. Not a bug.
- **`PriceTag` Tones** — `default` vs `muted` likewise close. Intentional.

Neither currently trips a `variantsIdentical` warn, but they are the two most
likely to if the palette is ever flattened further.

## Re-sync risks

- **No `projectId` is pinned.** The first authorized sync will create a project
  and must record its id. Until then every run is a first sync.
- **Grades are local and gitignored** (`.design-sync/.cache/`). Verified state
  normally carries across machines via the uploaded `_ds_sync.json` — since
  nothing has been uploaded, **a fresh clone will re-verify all 18 components
  from scratch.** That is correct, just not fast.
- **The authored previews in `.design-sync/previews/` are committed** and will
  carry forward. They import from `'@car-ibiza/ui'` by package name, so they
  break if the package is renamed.
- **Preview content is illustrative, not signed off.** The drink names, prices
  and descriptions (Cala Blanca, Golden Hour, Figuera…) were invented to exercise
  the components against the brief's categories. They are not the real Car-Ibiza
  menu and should not be treated as approved copy.
- `preview-rebuild.mjs` does **not** regenerate `_ds_bundle.js`. After changing
  any component *source*, run the full `package-build.mjs` (or the driver) or you
  will grade the old component against a new preview and see no change.
- Running `package-capture.mjs --components X` **prunes** the review sheets for
  every other component. Run it unscoped before a grading pass that needs all
  sheets present.
