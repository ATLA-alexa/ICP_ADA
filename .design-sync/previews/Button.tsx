import { Button, Stack } from '@car-ibiza/ui';

export const Variants = () => (
  <Stack direction="horizontal" gap="sm" align="center" wrap>
    <Button variant="primary">Reserve a table</Button>
    <Button variant="secondary">View menu</Button>
    <Button variant="ghost">Skip</Button>
    <Button variant="link">Download PDF</Button>
  </Stack>
);

export const Sizes = () => (
  <Stack direction="horizontal" gap="sm" align="center" wrap>
    <Button size="sm">Small</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>
  </Stack>
);

export const States = () => (
  <Stack direction="horizontal" gap="sm" align="center" wrap>
    <Button>Order</Button>
    <Button loading>Sending</Button>
    <Button disabled>Unavailable</Button>
    <Button variant="secondary" disabled>
      Closed
    </Button>
  </Stack>
);

export const FullWidth = () => (
  <Stack gap="sm">
    <Button fullWidth>Reserve for this evening</Button>
    <Button variant="secondary" fullWidth>
      Join the waiting list
    </Button>
  </Stack>
);
