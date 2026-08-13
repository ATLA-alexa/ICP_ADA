import { Heading, Stack } from '@car-ibiza/ui';

export const Scale = () => (
  <Stack gap="md" align="start">
    <Heading size="display">Cala Blanca</Heading>
    <Heading size="xl">Mocktails</Heading>
    <Heading size="lg">Barista</Heading>
    <Heading size="md">Tea-monades</Heading>
    <Heading size="sm">Lemonades</Heading>
  </Stack>
);

export const Tones = () => (
  <Stack gap="sm" align="start">
    <Heading size="lg" tone="default">Default ink</Heading>
    <Heading size="lg" tone="muted">Muted</Heading>
    <Heading size="lg" tone="brass">Brass</Heading>
  </Stack>
);

export const Centred = () => (
  <Stack gap="sm">
    <Heading size="xl" align="center">After Sunset</Heading>
    <Heading size="md" align="center" tone="muted">Served until midnight</Heading>
  </Stack>
);

export const LevelsIndependentOfSize = () => (
  <Stack gap="sm" align="start">
    <Heading size="sm" level={1}>An h1 set small</Heading>
    <Heading size="xl" level={3}>An h3 set large</Heading>
  </Stack>
);
