import { MenuHeader } from '@car-ibiza/ui';

export const Cover = () => (
  <MenuHeader
    title="Drinks"
    tagline="Ibiza"
    intro="The room is a calm canvas. The drinks are the paint."
  />
);

export const Banner = () => <MenuHeader variant="banner" title="Mocktails" tagline="Ibiza" />;

export const CoverWithoutIntro = () => <MenuHeader title="Barista & Tea" tagline="Santa Gertrudis" />;

// `inverse` brings its own dark surface — no theme flip around it, or the two
// inversions cancel and the ink lands dark-on-dark.
export const Inverse = () => (
  <MenuHeader title="After Sunset" tagline="Ibiza" intro="Served until midnight." inverse />
);
