import { DrinkCard, Badge, Stack } from '@car-ibiza/ui';

export const Signature = () => (
  <DrinkCard
    name="Cala Blanca"
    description="Cucumber, elderflower, lime and a pinch of sea salt. Long, cold and barely sweet."
    price={8.5}
    tone="sea"
    serve="Tall glass, over ice"
    signature
    badges={
      <>
        <Badge tone="sea">Sparkling</Badge>
        <Badge tone="sage">Low sugar</Badge>
      </>
    }
  />
);

export const FamilyTones = () => (
  <Stack gap="md">
    <DrinkCard name="Golden Hour" description="Apricot, orange blossom, soda." price={8.5} tone="sun" layout="inline" />
    <DrinkCard name="Green Shade" description="Matcha, mint, lime, coconut water." price={9} tone="sage" layout="inline" />
    <DrinkCard name="Rose & Cardamom" description="Rosewater, cardamom, pressed grape." price={8.5} tone="rose" layout="inline" />
  </Stack>
);

export const Stacked = () => (
  <Stack direction="horizontal" gap="md" align="stretch">
    <DrinkCard name="Salt & Citrus" description="Grapefruit, lime, saline. Sharp and dry." price={8} tone="sea" serve="Tall glass" />
    <DrinkCard name="Figuera" description="Fig leaf, almond, lemon. Soft and nutty." price={9} tone="clay" serve="Tall glass" />
  </Stack>
);

export const Minimal = () => (
  <DrinkCard name="Almond Orgeat" description="House orgeat, lemon, soda." price={7.5} tone="clay" />
);
