import { cx } from '../utils';
import { Ornament } from './Ornament';

export interface WordmarkProps {
  /** The name as it should be set. Defaults to the house name. */
  name?: string;
  /** Line under the name — a location, a tagline, a section. */
  tagline?: string;
  /** Rendered scale. `lg` is menu-cover size. */
  size?: 'sm' | 'md' | 'lg';
  /** Stack the motif above the name instead of setting it inline. */
  stacked?: boolean;
  /** Hide the zellige motif and set the name alone. */
  bare?: boolean;
  /** Ink treatment — use `inverse` on dark surfaces. */
  tone?: 'default' | 'brass' | 'inverse';
  className?: string;
}

/**
 * The house wordmark: the name in Cormorant Garamond with the zellige star.
 *
 * This stands in for a logo until artwork exists. Because it is type plus an
 * inline SVG rather than an image, it stays crisp at any size and recolours
 * with the theme — so the same component works on a menu cover, a page header
 * and a dark evening surface.
 */
export function Wordmark({
  name = 'Car-Ibiza',
  tagline,
  size = 'md',
  stacked = false,
  bare = false,
  tone = 'default',
  className,
}: WordmarkProps) {
  const ornamentSize = size === 'lg' ? 'md' : 'sm';
  return (
    <div
      className={cx(
        'ci-wordmark',
        `ci-wordmark--${size}`,
        `ci-wordmark--${tone}`,
        stacked && 'ci-wordmark--stacked',
        className,
      )}
    >
      {!bare && <Ornament variant="star" size={ornamentSize} tone={tone === 'inverse' ? 'brass' : 'brass'} />}
      <div className="ci-wordmark__text">
        <span className="ci-wordmark__name">{name}</span>
        {tagline && <span className="ci-wordmark__tagline">{tagline}</span>}
      </div>
    </div>
  );
}
