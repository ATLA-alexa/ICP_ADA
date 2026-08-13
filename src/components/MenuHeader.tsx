import { cx } from '../utils';
import { Ornament } from './Ornament';
import { Wordmark } from './Wordmark';

export interface MenuHeaderProps {
  /** The menu's title — "Drinks", "Barista & Tea". */
  title?: string;
  /** The house name set in the wordmark. */
  name?: string;
  /** Line under the wordmark — a location or descriptor. */
  tagline?: string;
  /** A line of intent under the title, usually one sentence. */
  intro?: string;
  /** `cover` is the full-page treatment; `banner` is the compact version for continuation pages. */
  variant?: 'cover' | 'banner';
  /** Render on the inverse surface for evening menus. */
  inverse?: boolean;
  className?: string;
}

/**
 * The top of a menu.
 *
 * `cover` is a full standalone page — wordmark, lattice band, title. `banner`
 * is the shorter header for the second and third pages so the wordmark stays
 * present without repeating the whole cover. Both centre their content, which
 * is the brand's default for anything ceremonial.
 */
export function MenuHeader({
  title,
  name = 'Car-Ibiza',
  tagline,
  intro,
  variant = 'cover',
  inverse = false,
  className,
}: MenuHeaderProps) {
  return (
    <header
      className={cx('ci-menu-header', `ci-menu-header--${variant}`, inverse && 'ci-menu-header--inverse', className)}
    >
      <Wordmark
        name={name}
        tagline={tagline}
        size={variant === 'cover' ? 'lg' : 'sm'}
        stacked={variant === 'cover'}
        tone={inverse ? 'inverse' : 'default'}
      />
      {variant === 'cover' && (
        <div className="ci-menu-header__band">
          <Ornament variant="lattice" size="sm" tone="brass" />
        </div>
      )}
      {title && <h1 className="ci-menu-header__title">{title}</h1>}
      {intro && <p className="ci-menu-header__intro">{intro}</p>}
    </header>
  );
}
