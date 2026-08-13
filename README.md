# @car-ibiza/ui

The Car-Ibiza design system — Ibiza × Morocco.

> The room is a calm canvas. The drinks are the paint.

Surfaces stay warm and quiet (limestone, plaster, sand), ink is a warm
near-black, and muted brass carries the premium note. Five desaturated accents —
clay, sage, sun, rose, sea — are the only saturated colour in the system, one
per drink family, used at small size. Think sunset, not rave.

## Install

```sh
npm install
npm run build
```

## Use

```tsx
import '@car-ibiza/ui/styles.css';
import { ThemeProvider, MenuSection, MenuItem, OptionRow } from '@car-ibiza/ui';

<ThemeProvider theme="day">
  <MenuSection title="Barista" eyebrow="Coffee" tone="clay">
    <MenuItem name="Cortado" description="Double espresso, equal warm milk." price={3.2} />
    <MenuItem name="Flat White" description="Double ristretto, silk microfoam." price={3.6} />
    <OptionRow label="Milk" options={['Full fat', 'Oat', 'Almond', 'Coconut']} defaultOption="Full fat" />
  </MenuSection>
</ThemeProvider>
```

`<ThemeProvider>` sets the brand typeface and the canvas colour, and selects
between the `day` and `evening` token sets. Components render without it
because the tokens live on `:root`, but text falls back to the host page's
font, so wrap your tree.

## The menu

The live drinks menu is data, not markup. Edit
[`examples/menu.json`](examples/menu.json) and regenerate:

```sh
npm run build && npm run menu     # → examples/menu.html
```

The output is one self-contained file — stylesheet and both typefaces inlined —
so it can be emailed, opened offline, or sent to a printer with nothing
alongside it. It has a print stylesheet. Because every element is rendered by
the real components, the menu can never drift from the design system.

Set `MENU_THEME=evening` to render the after-dark version.

> The drink names, descriptions and prices currently in `menu.json` are
> **placeholders** written to exercise the components. Replace them with the
> real menu.

## What's in it

| Group | Components |
|---|---|
| Foundation | `ThemeProvider`, `Stack` |
| Typography | `Heading`, `Text`, `Eyebrow` |
| Brand | `Wordmark`, `Ornament`, `Divider` |
| Surfaces & controls | `Card`, `Button`, `Badge`, `Callout` |
| Menu | `MenuHeader`, `MenuSection`, `MenuItem`, `PriceTag`, `OptionRow`, `DrinkCard` |

## Styling

Everything is CSS custom properties under the `--ci-` prefix, defined on
`:root` in [`src/tokens/tokens.css`](src/tokens/tokens.css). There is no JS
theme object, so the tokens work in any consumer whether or not it renders
these React components.

Class names are BEM-ish under a `ci-` prefix (`ci-card`, `ci-card--raised`,
`ci-menu-item__name`). They are an implementation detail — style via props, and
use the tokens for your own layout glue.

## Typefaces

Cormorant Garamond (display) and Inter (text), both under the SIL Open Font
License 1.1, self-hosted as variable woff2 in `src/fonts/` so nothing depends
on a font CDN at render time.

## Build output

`npm run build` produces:

- `dist/index.js` — ESM bundle, React left external
- `dist/index.d.ts` — type declarations
- `dist/styles.css` — the whole stylesheet with fonts inlined as file references
