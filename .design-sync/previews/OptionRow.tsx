import { OptionRow, Stack } from '@car-ibiza/ui';

export const Milks = () => (
  <OptionRow
    label="Milk"
    options={['Full fat', 'Oat', 'Almond', 'Coconut']}
    defaultOption="Full fat"
    note="+€0.50 for plant milks"
  />
);

export const Several = () => (
  <Stack gap="sm">
    <OptionRow label="Milk" options={['Full fat', 'Oat', 'Almond', 'Coconut']} defaultOption="Full fat" />
    <OptionRow label="Serve" options={['Hot', 'Iced']} defaultOption="Hot" />
    <OptionRow label="Strength" options={['Single', 'Double', 'Triple']} defaultOption="Double" />
    <OptionRow label="Tea" options={['Oolong', 'Jasmine', 'White', 'Chai']} defaultOption="Jasmine" />
  </Stack>
);

export const Sizes = () => (
  <Stack gap="sm">
    <OptionRow label="Sweetness" options={['None', 'Light', 'Standard']} defaultOption="Light" size="sm" />
    <OptionRow label="Sweetness" options={['None', 'Light', 'Standard']} defaultOption="Light" size="md" />
  </Stack>
);

export const NoDefault = () => (
  <OptionRow label="Garnish" options={['Mint', 'Lime', 'Rosemary', 'Orange peel', 'None']} />
);
