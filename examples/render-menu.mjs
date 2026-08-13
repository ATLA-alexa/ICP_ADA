#!/usr/bin/env node
/**
 * Render examples/menu.json into a standalone examples/menu.html.
 *
 *   npm run build && npm run menu
 *
 * The output is one self-contained file — stylesheet and both typefaces are
 * inlined as data URIs — so it can be emailed, opened offline, or sent to a
 * printer without carrying any assets alongside it.
 *
 * Every element is rendered by the real components from dist/, so the menu
 * cannot drift from the design system: change a component and the menu changes
 * with it.
 */
import { renderToStaticMarkup } from 'react-dom/server';
import { createElement as h } from 'react';
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');

const {
  ThemeProvider, MenuHeader, MenuSection, MenuItem, OptionRow,
  DrinkCard, Divider, Badge, Callout, Stack,
} = await import(resolve(root, 'dist/index.js'));

const menu = JSON.parse(readFileSync(resolve(here, 'menu.json'), 'utf8'));

// --- stylesheet, with the woff2 files folded in as data URIs ----------------
const cssPath = resolve(root, 'dist/styles.css');
const css = readFileSync(cssPath, 'utf8').replace(
  /url\("\.\/([^"]+\.woff2)"\)/g,
  (_m, file) =>
    `url("data:font/woff2;base64,${readFileSync(resolve(dirname(cssPath), file)).toString('base64')}")`,
);

const badges = (list) =>
  list?.length
    ? list.map((b, i) => h(Badge, { key: i, tone: b.tone ?? 'neutral' }, b.label))
    : undefined;

const renderSection = (section, i) => {
  const body =
    section.layout === 'cards'
      ? [
          h(
            'div',
            { className: 'menu-grid', key: 'cards' },
            (section.drinks ?? []).map((d) =>
              h(DrinkCard, {
                key: d.name,
                name: d.name,
                description: d.description,
                price: d.price,
                tone: d.tone ?? section.tone,
                serve: d.serve,
                signature: d.signature,
                badges: badges(d.badges),
              }),
            ),
          ),
        ]
      : (section.items ?? []).map((it) =>
          h(MenuItem, {
            key: it.name,
            name: it.name,
            description: it.description,
            price: it.price,
            altPrice: it.altPrice,
            priceNote: it.priceNote,
            unavailable: it.unavailable,
            badges: badges(it.badges),
          }),
        );

  return h(
    'div',
    { key: section.title },
    i > 0 ? h(Divider, { variant: 'ornamented', spacing: 'lg', tone: 'brass' }) : null,
    h(
      MenuSection,
      {
        title: section.title,
        eyebrow: section.eyebrow,
        tone: section.tone,
        description: section.description,
        columns: section.columns ?? 1,
        align: section.align,
      },
      ...body,
    ),
    ...(section.options ?? []).map((o, k) =>
      h(OptionRow, {
        key: `opt${k}`,
        label: o.label,
        options: o.options,
        defaultOption: o.defaultOption,
        note: o.note,
        className: 'menu-options',
      }),
    ),
  );
};

const page = h(
  ThemeProvider,
  { theme: process.env.MENU_THEME === 'evening' ? 'evening' : 'day' },
  h(MenuHeader, {
    title: menu.house.title,
    name: menu.house.name,
    tagline: menu.house.tagline,
    intro: menu.house.intro,
  }),
  h(Stack, { gap: '2xl' }, ...menu.sections.map(renderSection)),
  ...(menu.notes ?? []).map((n, i) =>
    h(Callout, { key: `note${i}`, title: n.title, tone: n.tone }, n.body),
  ),
);

// HTML entities rather than raw UTF-8: the file then renders correctly however
// it is served or opened, with no charset declaration to get lost.
const escape = (s) => s.replace(/[^\x00-\x7F]/g, (c) => `&#${c.codePointAt(0)};`);

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escape(menu.house.name)} &mdash; ${escape(menu.house.title)}</title>
<style>
${css}
body { margin: 0; background: var(--ci-canvas); }
.menu-page { max-width: var(--ci-menu-width); margin: 0 auto; padding: var(--ci-space-2xl) var(--ci-space-lg) var(--ci-space-4xl); }
.menu-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr)); gap: var(--ci-space-md); }
.menu-options { margin-top: var(--ci-space-sm); }
@media print {
  body { background: #fff; }
  .menu-page { max-width: none; padding: 0; }
}
</style>
</head>
<body>
<div class="menu-page">${escape(renderToStaticMarkup(page))}</div>
</body>
</html>
`;

const out = resolve(here, 'menu.html');
writeFileSync(out, html);
const drinks = menu.sections.reduce(
  (n, s) => n + (s.items?.length ?? 0) + (s.drinks?.length ?? 0),
  0,
);
console.log(`✓ ${out}`);
console.log(`  ${menu.sections.length} sections, ${drinks} drinks, ${(Buffer.byteLength(html) / 1024).toFixed(0)} KB self-contained`);
