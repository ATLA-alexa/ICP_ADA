## Building with Car-Ibiza

Ibiza × Morocco. **The room is a calm canvas; the drinks are the paint.** Surfaces
stay warm and quiet, brass carries the premium note, and the five accent colours
are the only saturated colour in the system — used one at a time, at small size.
Never add a colour that is not a token below.

### Wrap the tree

```jsx
<ThemeProvider theme="day">   {/* or theme="evening" */}
  …
</ThemeProvider>
```

`ThemeProvider` sets the brand typefaces, the canvas colour, and the `data-theme`
attribute that selects the day or evening token set. Components render without it
because tokens are defined on `:root`, but the text falls back to the host page's
font — so always wrap. `fullBleed` adds page padding and full height.

### Style via props, not classes

There is **no utility-class vocabulary here.** Every `ci-*` class in the DOM is
internal and must never be typed by hand or extended. Components are configured
entirely through props:

- Colour: `tone` — `brass`, `clay`, `sage`, `sun`, `rose`, `sea`, `neutral`, `muted`
- Surface: `variant` on `Card` — `bordered`, `raised`, `sunk`, `plain`
- Space: `gap` / `padding` — `2xs xs sm md lg xl 2xl 3xl`
- Size: `size` — `sm`, `md`, `lg` (plus `xl`/`display` on `Heading`)

For your own layout glue, write plain CSS using the tokens — never invented class
names:

`--ci-canvas --ci-surface --ci-surface-raised --ci-surface-sunk --ci-surface-inverse`
`--ci-ink --ci-ink-muted --ci-ink-subtle --ci-ink-inverse`
`--ci-line --ci-line-strong`
`--ci-brass --ci-brass-soft --ci-brass-tint --ci-brass-deep`
`--ci-clay --ci-sage --ci-sun --ci-rose --ci-sea` (each has a `-tint`)
`--ci-space-2xs … --ci-space-4xl` · `--ci-radius-sm|md|lg|pill`
`--ci-font-display --ci-font-text` · `--ci-text-2xs … --ci-text-4xl`
`--ci-shadow-sm|md|lg` · `--ci-measure` · `--ci-menu-width`

### The colour code

Each drink family owns one accent. Keep it consistent across a whole menu — the
colour coding is what lets the drinks be the paint:

| Family | tone |
|---|---|
| Barista / coffee | `clay` |
| Matcha / tea | `sage` |
| Lemonades | `sun` |
| Tea-monades | `rose` |
| Mocktails | `sea` |
| House / premium | `brass` |

### Two things that will bite you

- **`inverse` already brings its own surface.** `MenuHeader inverse` paints a dark
  panel and light ink. Do *not* also wrap it in `theme="evening"` — in that token
  set `--ci-ink-inverse` is dark by definition, so the two inversions cancel and
  you get dark-on-dark. Same for `Wordmark tone="inverse"`: use it on a dark
  surface, not inside a flipped theme.
- **Prices are display type, not data.** `PriceTag` sets in Cormorant at the same
  weight as drink names. Don't shrink or grey them out to "get them out of the way".

### Read the real files

`styles.css` and its imports (`fonts/fonts.css`, `_ds_bundle.css`) are the whole
styling truth — the token block at the top of `_ds_bundle.css` defines every value
above, including the `[data-theme='evening']` overrides. Per-component API is in
`components/general/<Name>/<Name>.d.ts`, usage in `<Name>.prompt.md`.

### A menu section, idiomatically

```jsx
<ThemeProvider theme="day" fullBleed>
  <MenuHeader title="Drinks" tagline="Ibiza"
              intro="The room is a calm canvas. The drinks are the paint." />

  <MenuSection title="Barista" eyebrow="Coffee" tone="clay"
               description="Single origin from Ibiza roasters, pulled to order.">
    <MenuItem name="Cortado" description="Double espresso, equal warm milk." price={3.2} />
    <MenuItem name="Flat White" description="Double ristretto under silk microfoam." price={3.6} />
    <OptionRow label="Milk" options={['Full fat', 'Oat', 'Almond', 'Coconut']}
               defaultOption="Full fat" note="+€0.50 for plant milks" />
  </MenuSection>

  <Divider variant="ornamented" spacing="lg" tone="brass" />

  <MenuSection title="Mocktails" eyebrow="Signature" tone="sea">
    <DrinkCard name="Cala Blanca" tone="sea" price={8.5} signature
               serve="Tall glass, over ice"
               description="Cucumber, elderflower, lime and a pinch of sea salt."
               badges={<Badge tone="sea">Sparkling</Badge>} />
  </MenuSection>
</ThemeProvider>
```

Use `Divider variant="ornamented"` between sections and `Ornament variant="lattice"`
as a band on covers — that zellige geometry is the brand's cultural signature, so
it appears once or twice per page, never as repeated decoration.
