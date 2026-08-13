import { Callout, Stack, Text } from '@car-ibiza/ui';

export const Allergens = () => (
  <Callout title="Allergens">
    <Text size="sm" tone="muted">
      Full allergen information is available on request. Plant milks, nut syrups and gluten-free
      options are marked on each item.
    </Text>
  </Callout>
);

export const Tones = () => (
  <Stack gap="sm">
    <Callout title="Neutral" tone="neutral">
      <Text size="sm" tone="muted">The default quiet note.</Text>
    </Callout>
    <Callout title="House" tone="brass">
      <Text size="sm" tone="muted">Everything is made to order.</Text>
    </Callout>
    <Callout title="Tea" tone="sage">
      <Text size="sm" tone="muted">All teas are available cold brewed.</Text>
    </Callout>
    <Callout title="Coffee" tone="clay">
      <Text size="sm" tone="muted">Decaffeinated available across the barista menu.</Text>
    </Callout>
  </Stack>
);

export const Centred = () => (
  <Callout tone="brass" align="center">
    <Text size="sm" tone="muted">
      Kitchen open until 23:00 · Bar until midnight
    </Text>
  </Callout>
);

export const Untitled = () => (
  <Callout>
    <Text size="sm" tone="muted">
      A note without a title, for closing lines at the foot of a menu.
    </Text>
  </Callout>
);
