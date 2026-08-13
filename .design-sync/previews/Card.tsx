import { Card, Stack, Heading, Text, Eyebrow } from '@car-ibiza/ui';

export const Variants = () => (
  <Stack gap="md">
    <Card variant="bordered">
      <Text size="sm">Bordered — the default panel for menu sections.</Text>
    </Card>
    <Card variant="raised">
      <Text size="sm">Raised — lifts off the canvas. One or two per page at most.</Text>
    </Card>
    <Card variant="sunk">
      <Text size="sm">Sunk — recedes into the canvas, for secondary notes.</Text>
    </Card>
    <Card variant="plain">
      <Text size="sm">Plain — no surface, padding only.</Text>
    </Card>
  </Stack>
);

export const FamilyAccents = () => (
  <Stack gap="sm">
    <Card accent="clay" padding="md">
      <Eyebrow tone="clay">Barista</Eyebrow>
    </Card>
    <Card accent="sage" padding="md">
      <Eyebrow tone="sage">Matcha</Eyebrow>
    </Card>
    <Card accent="sun" padding="md">
      <Eyebrow tone="sun">Lemonades</Eyebrow>
    </Card>
    <Card accent="sea" padding="md">
      <Eyebrow tone="sea">Mocktails</Eyebrow>
    </Card>
  </Stack>
);

export const Composed = () => (
  <Card variant="raised" accent="brass">
    <Stack gap="sm">
      <Eyebrow>House note</Eyebrow>
      <Heading size="md">Everything is made to order</Heading>
      <Text size="sm" tone="muted" measured>
        Syrups, cordials and orgeat are made here each morning. If something is missing from the
        menu, ask — most of it can be built from what is behind the bar.
      </Text>
    </Stack>
  </Card>
);

export const Padding = () => (
  <Stack direction="horizontal" gap="sm" align="start" wrap>
    <Card padding="sm">
      <Text size="xs">sm</Text>
    </Card>
    <Card padding="md">
      <Text size="xs">md</Text>
    </Card>
    <Card padding="lg">
      <Text size="xs">lg</Text>
    </Card>
    <Card padding="xl">
      <Text size="xs">xl</Text>
    </Card>
  </Stack>
);
