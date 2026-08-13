import { Eyebrow, Stack, Heading } from '@car-ibiza/ui';

export const FamilyTones = () => (
  <Stack gap="sm" align="start">
    <Eyebrow tone="clay">Barista</Eyebrow>
    <Eyebrow tone="sage">Matcha</Eyebrow>
    <Eyebrow tone="sun">Lemonades</Eyebrow>
    <Eyebrow tone="rose">Tea-monades</Eyebrow>
    <Eyebrow tone="sea">Mocktails</Eyebrow>
    <Eyebrow tone="brass">House</Eyebrow>
  </Stack>
);

export const WithRule = () => (
  <Stack gap="lg">
    <Eyebrow tone="clay" rule>Barista</Eyebrow>
    <Eyebrow tone="sea" rule>Mocktails</Eyebrow>
  </Stack>
);

export const Centred = () => (
  <Stack gap="lg">
    <Eyebrow tone="brass" rule align="center">Ceremonial grade</Eyebrow>
    <Eyebrow tone="sage" align="center">Cold brewed</Eyebrow>
  </Stack>
);

export const AboveHeading = () => (
  <Stack gap="2xs" align="start">
    <Eyebrow tone="sea">Signature</Eyebrow>
    <Heading size="lg">Cala Blanca</Heading>
  </Stack>
);
