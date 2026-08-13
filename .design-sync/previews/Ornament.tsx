import { Ornament, Stack, Text } from '@car-ibiza/ui';

export const Motifs = () => (
  <Stack direction="horizontal" gap="xl" align="center">
    <Stack gap="xs" align="center">
      <Ornament variant="star" size="lg" />
      <Text size="xs" tone="subtle">
        star
      </Text>
    </Stack>
    <Stack gap="xs" align="center">
      <Ornament variant="diamond" size="lg" />
      <Text size="xs" tone="subtle">
        diamond
      </Text>
    </Stack>
  </Stack>
);

export const Sizes = () => (
  <Stack direction="horizontal" gap="lg" align="center">
    <Ornament variant="star" size="sm" />
    <Ornament variant="star" size="md" />
    <Ornament variant="star" size="lg" />
  </Stack>
);

export const LatticeBand = () => (
  <Stack gap="md">
    <Ornament variant="lattice" size="lg" tone="brass" />
    <Ornament variant="lattice" size="md" tone="clay" />
    <Ornament variant="lattice" size="sm" tone="sea" />
  </Stack>
);

export const Tones = () => (
  <Stack direction="horizontal" gap="md" align="center" wrap>
    <Ornament variant="star" tone="brass" />
    <Ornament variant="star" tone="clay" />
    <Ornament variant="star" tone="sage" />
    <Ornament variant="star" tone="sun" />
    <Ornament variant="star" tone="rose" />
    <Ornament variant="star" tone="sea" />
  </Stack>
);
