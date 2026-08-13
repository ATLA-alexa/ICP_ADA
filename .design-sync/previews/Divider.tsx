import { Divider, Stack, Text, Heading } from '@car-ibiza/ui';

export const Variants = () => (
  <Stack gap="none">
    <Text size="sm" tone="muted">Plain — between items in a section.</Text>
    <Divider variant="plain" />
    <Text size="sm" tone="muted">Ornamented — the brand&rsquo;s section break.</Text>
    <Divider variant="ornamented" />
    <Text size="sm" tone="muted">Lattice — a patterned band.</Text>
    <Divider variant="lattice" />
    <Text size="sm" tone="muted">End.</Text>
  </Stack>
);

export const Tones = () => (
  <Stack gap="none">
    <Divider variant="plain" tone="line" />
    <Divider variant="plain" tone="strong" />
    <Divider variant="plain" tone="brass" />
    <Divider variant="ornamented" tone="brass" />
  </Stack>
);

export const BetweenSections = () => (
  <Stack gap="none">
    <Heading size="md">Barista</Heading>
    <Divider variant="ornamented" spacing="lg" tone="brass" />
    <Heading size="md">Mocktails</Heading>
  </Stack>
);

export const Spacing = () => (
  <Stack gap="none">
    <Text size="xs" tone="subtle">none</Text>
    <Divider spacing="none" />
    <Text size="xs" tone="subtle">sm</Text>
    <Divider spacing="sm" />
    <Text size="xs" tone="subtle">md</Text>
    <Divider spacing="md" />
    <Text size="xs" tone="subtle">lg</Text>
    <Divider spacing="lg" />
    <Text size="xs" tone="subtle">end</Text>
  </Stack>
);
