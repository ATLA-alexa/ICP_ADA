import { MenuSection, MenuItem, OptionRow } from '@car-ibiza/ui';

export const Barista = () => (
  <MenuSection
    title="Barista"
    eyebrow="Coffee"
    tone="clay"
    description="Single origin from Ibiza roasters, pulled to order."
  >
    <MenuItem name="Espresso" description="Short, dense, citrus finish." price={2.4} />
    <MenuItem name="Cortado" description="Double espresso, equal warm milk." price={3.2} />
    <MenuItem name="Flat White" description="Double ristretto under silk microfoam." price={3.6} />
    <MenuItem name="Americano" description="Espresso lengthened with hot water." price={3.0} />
    <OptionRow
      label="Milk"
      options={['Full fat', 'Oat', 'Almond', 'Coconut']}
      defaultOption="Full fat"
      note="+€0.50 for plant milks"
    />
  </MenuSection>
);

export const TwoColumn = () => (
  <MenuSection title="Tea-monades" eyebrow="Cold brew tea" tone="rose" columns={2}>
    <MenuItem name="Oolong & Peach" description="Lightly oxidised, stone fruit." price={5.5} />
    <MenuItem name="Jasmine & Lime" description="Green tea, cold pressed lime." price={5.5} />
    <MenuItem name="White Tea & Pear" description="Delicate, barely sweet." price={5.8} />
    <MenuItem name="Chai & Orange" description="Cardamom, clove, bitter orange." price={5.8} />
  </MenuSection>
);

export const Centred = () => (
  <MenuSection
    title="Matcha"
    eyebrow="Ceremonial grade"
    tone="sage"
    align="center"
    description="Whisked to order. Available with any milk."
  >
    <MenuItem name="Matcha Latte" description="Ceremonial matcha, warm milk." price={4.8} />
    <MenuItem name="Iced Matcha" description="Over ice, lightly sweetened." price={5.0} />
  </MenuSection>
);
