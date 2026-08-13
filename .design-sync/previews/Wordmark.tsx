import { Wordmark, Stack } from '@car-ibiza/ui';

export const Sizes = () => (
  <Stack gap="lg" align="start">
    <Wordmark size="sm" />
    <Wordmark size="md" />
    <Wordmark size="lg" />
  </Stack>
);

export const WithTagline = () => (
  <Stack gap="lg" align="start">
    <Wordmark size="md" tagline="Ibiza" />
    <Wordmark size="md" tagline="Santa Gertrudis" />
  </Stack>
);

export const Stacked = () => <Wordmark size="lg" tagline="Ibiza" stacked />;

export const Bare = () => (
  <Stack gap="lg" align="start">
    <Wordmark size="md" bare />
    <Wordmark size="md" bare tone="brass" tagline="Ibiza" />
  </Stack>
);

// tone="inverse" is ink for the *opposite* surface, so it belongs on a dark
// panel — not inside an evening theme, where the default tone is already light.
export const OnDarkSurface = () => (
  <div style={{ background: 'var(--ci-surface-inverse)', padding: '2rem' }}>
    <Wordmark size="lg" tagline="Ibiza" stacked tone="inverse" />
  </div>
);
