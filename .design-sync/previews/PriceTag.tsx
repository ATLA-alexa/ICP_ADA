import { PriceTag, Stack, Text } from '@car-ibiza/ui';

export const Sizes = () => (
  <Stack direction="horizontal" gap="xl" align="end">
    <PriceTag value={3.2} size="sm" />
    <PriceTag value={5.5} size="md" />
    <PriceTag value={8.5} size="lg" />
  </Stack>
);

export const TwoServes = () => (
  <Stack direction="horizontal" gap="xl" align="end">
    <PriceTag value={4.2} altValue={6.4} note="Reg / Tall" />
    <PriceTag value={2.4} altValue={3.2} note="Single / Double" />
  </Stack>
);

export const Tones = () => (
  <Stack direction="horizontal" gap="xl" align="end">
    <PriceTag value={6} tone="default" />
    <PriceTag value={6} tone="muted" />
    <PriceTag value={6} tone="brass" />
  </Stack>
);

export const Currencies = () => (
  <Stack direction="horizontal" gap="xl" align="end">
    <PriceTag value={8.5} currency="€" />
    <PriceTag value={7.5} currency="£" />
    <PriceTag value="mkt" currency="" />
  </Stack>
);

export const InContext = () => (
  <Stack gap="xs">
    <Text size="sm" tone="muted">
      Prices are set from the display serif so they read as part of the menu, not as data.
    </Text>
    <PriceTag value={9} size="lg" tone="brass" note="Tall glass" />
  </Stack>
);
