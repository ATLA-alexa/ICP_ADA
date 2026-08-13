import { Text, Stack } from '@car-ibiza/ui';

export const Sizes = () => (
  <Stack gap="sm" align="start">
    <Text size="lg">Large — for intros and pull quotes.</Text>
    <Text size="md">Medium — the default body size.</Text>
    <Text size="sm">Small — drink descriptions sit here.</Text>
    <Text size="xs">Extra small — fine print and notes.</Text>
  </Stack>
);

export const Tones = () => (
  <Stack gap="xs" align="start">
    <Text tone="default">Default ink, warm near-black.</Text>
    <Text tone="muted">Muted — descriptions and secondary copy.</Text>
    <Text tone="subtle">Subtle — the quietest readable step.</Text>
    <Text tone="brass">Brass — for emphasis inside a paragraph.</Text>
  </Stack>
);

export const SerifAndItalic = () => (
  <Stack gap="sm" align="start">
    <Text serif size="lg">
      Set in the display serif, for the brand&rsquo;s voice.
    </Text>
    <Text serif italic size="lg" tone="muted">
      Fig leaf, almond and lemon — soft, nutty, barely sweet.
    </Text>
    <Text italic size="sm" tone="muted">
      Italic in the text face, for tasting notes.
    </Text>
  </Stack>
);

export const Measured = () => (
  <Text measured tone="muted">
    The room is a calm canvas and the drinks are the paint. Everything on the menu is built to sit
    quietly on the page until you look for it, which is why descriptions are held to a comfortable
    reading measure rather than running the full width of the container.
  </Text>
);

export const Weights = () => (
  <Stack gap="xs" align="start">
    <Text weight="regular">Regular — body copy.</Text>
    <Text weight="medium">Medium — emphasis.</Text>
    <Text weight="semibold">Semibold — labels and eyebrows.</Text>
  </Stack>
);
