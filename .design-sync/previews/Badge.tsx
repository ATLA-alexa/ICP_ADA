import { Badge, Stack } from '@car-ibiza/ui';

export const Tones = () => (
  <Stack direction="horizontal" gap="xs" align="center" wrap>
    <Badge tone="neutral">Neutral</Badge>
    <Badge tone="brass">New</Badge>
    <Badge tone="clay">Barista</Badge>
    <Badge tone="sage">Matcha</Badge>
    <Badge tone="sun">Lemonade</Badge>
    <Badge tone="rose">Tea-monade</Badge>
    <Badge tone="sea">Mocktail</Badge>
  </Stack>
);

export const Variants = () => (
  <Stack gap="sm">
    <Stack direction="horizontal" gap="xs" wrap>
      <Badge variant="soft" tone="sea">Soft</Badge>
      <Badge variant="soft" tone="clay">Soft</Badge>
      <Badge variant="soft" tone="sage">Soft</Badge>
    </Stack>
    <Stack direction="horizontal" gap="xs" wrap>
      <Badge variant="outline" tone="sea">Outline</Badge>
      <Badge variant="outline" tone="clay">Outline</Badge>
      <Badge variant="outline" tone="sage">Outline</Badge>
    </Stack>
    <Stack direction="horizontal" gap="xs" wrap>
      <Badge variant="solid" tone="sea">Solid</Badge>
      <Badge variant="solid" tone="clay">Solid</Badge>
      <Badge variant="solid" tone="sage">Solid</Badge>
    </Stack>
  </Stack>
);

export const Attributes = () => (
  <Stack direction="horizontal" gap="xs" align="center" wrap>
    <Badge tone="sea" dot>Sparkling</Badge>
    <Badge tone="sage" dot>Caffeine free</Badge>
    <Badge tone="brass" dot>House signature</Badge>
    <Badge tone="neutral" dot>Vegan</Badge>
  </Stack>
);

export const Sizes = () => (
  <Stack direction="horizontal" gap="xs" align="center">
    <Badge size="sm" tone="brass">Small</Badge>
    <Badge size="md" tone="brass">Medium</Badge>
  </Stack>
);
