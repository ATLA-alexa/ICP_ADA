import type { ReactNode } from 'react';
import { Stack, Card, Text, Badge } from '@car-ibiza/ui';

const Cell = ({ children }: { children: ReactNode }) => (
  <Card variant="sunk" padding="sm">
    <Text size="xs">{children}</Text>
  </Card>
);

export const Vertical = () => (
  <Stack gap="sm">
    <Cell>Espresso</Cell>
    <Cell>Cortado</Cell>
    <Cell>Flat White</Cell>
  </Stack>
);

export const Horizontal = () => (
  <Stack direction="horizontal" gap="sm">
    <Cell>Oat</Cell>
    <Cell>Almond</Cell>
    <Cell>Coconut</Cell>
  </Stack>
);

export const Gaps = () => (
  <Stack gap="lg">
    <Stack direction="horizontal" gap="2xs">
      <Cell>2xs</Cell>
      <Cell>2xs</Cell>
    </Stack>
    <Stack direction="horizontal" gap="md">
      <Cell>md</Cell>
      <Cell>md</Cell>
    </Stack>
    <Stack direction="horizontal" gap="2xl">
      <Cell>2xl</Cell>
      <Cell>2xl</Cell>
    </Stack>
  </Stack>
);

export const Justified = () => (
  <Stack direction="horizontal" justify="between" align="center">
    <Text size="sm" serif>Sparkling Lemonade</Text>
    <Badge tone="sun">Seasonal</Badge>
  </Stack>
);

export const Wrapped = () => (
  <Stack direction="horizontal" gap="xs" wrap>
    <Badge tone="sea">Sparkling</Badge>
    <Badge tone="sage">Caffeine free</Badge>
    <Badge tone="clay">Contains nuts</Badge>
    <Badge tone="rose">Low sugar</Badge>
    <Badge tone="brass">House signature</Badge>
    <Badge tone="neutral">Vegan</Badge>
  </Stack>
);
