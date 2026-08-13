import { ThemeProvider, Stack, Heading, Text, Badge, Button, Divider } from '@car-ibiza/ui';

const Sample = () => (
  <Stack gap="sm" align="start">
    <Heading size="lg">Cala Blanca</Heading>
    <Text size="sm" tone="muted">
      Cucumber, elderflower, lime and a pinch of sea salt.
    </Text>
    <Divider variant="ornamented" spacing="sm" tone="brass" />
    <Stack direction="horizontal" gap="xs" align="center">
      <Badge tone="sea">Sparkling</Badge>
      <Badge tone="brass">Signature</Badge>
    </Stack>
    <Button size="sm">Reserve</Button>
  </Stack>
);

export const Day = () => (
  <ThemeProvider theme="day" fullBleed>
    <Sample />
  </ThemeProvider>
);

export const Evening = () => (
  <ThemeProvider theme="evening" fullBleed>
    <Sample />
  </ThemeProvider>
);

export const SideBySide = () => (
  <div style={{ display: 'flex', alignItems: 'stretch' }}>
    <ThemeProvider theme="day" fullBleed>
      <Heading size="md">Day</Heading>
      <Text size="sm" tone="muted">Warm limestone canvas.</Text>
    </ThemeProvider>
    <ThemeProvider theme="evening" fullBleed>
      <Heading size="md">Evening</Heading>
      <Text size="sm" tone="muted">The same room after sunset.</Text>
    </ThemeProvider>
  </div>
);
