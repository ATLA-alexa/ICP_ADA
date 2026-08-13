import { MenuItem, Badge, Stack } from '@car-ibiza/ui';

export const Standard = () => (
  <Stack gap="none">
    <MenuItem name="Cappuccino" description="Double espresso, steamed milk, fine foam." price={3.4} />
    <MenuItem name="Flat White" description="Double ristretto under silk microfoam." price={3.6} />
    <MenuItem name="Cortado" description="Double espresso, equal warm milk." price={3.2} />
  </Stack>
);

export const WithBadges = () => (
  <Stack gap="none">
    <MenuItem
      name="Jasmine & Lime"
      description="Cold brewed green tea, cold pressed lime, sparkling."
      price={5.5}
      badges={
        <>
          <Badge tone="rose">Sparkling</Badge>
          <Badge tone="sage">Caffeine light</Badge>
        </>
      }
    />
    <MenuItem
      name="Chai & Orange"
      description="Cardamom, clove, bitter orange peel."
      price={5.8}
      badges={<Badge tone="brass">New</Badge>}
    />
  </Stack>
);

export const TwoServes = () => (
  <Stack gap="none">
    <MenuItem name="Still Lemonade" description="Pressed lemon, cane sugar, sea salt." price={4.2} altPrice={6.4} priceNote="Tall" />
    <MenuItem name="Sparkling Lemonade" description="The same, lengthened with soda." price={4.4} altPrice={6.6} priceNote="Tall" />
  </Stack>
);

export const NoLeader = () => (
  <Stack gap="none">
    <MenuItem name="Espresso" price={2.4} leader={false} />
    <MenuItem name="Americano" price={3.0} leader={false} />
    <MenuItem name="Macchiato" price={2.8} leader={false} />
  </Stack>
);

export const Unavailable = () => (
  <Stack gap="none">
    <MenuItem name="Matcha Latte" description="Ceremonial matcha, warm milk." price={4.8} />
    <MenuItem name="Iced Matcha" description="Back next week." price={5.0} unavailable />
  </Stack>
);
