import { useId } from 'react';
import { cx } from '../utils';

export interface OrnamentProps {
  /**
   * Which motif to draw. `star` is the eight-point zellige star, `diamond` a
   * single lozenge for tight spaces, `lattice` a repeating band for section
   * headers and menu covers.
   */
  variant?: 'star' | 'diamond' | 'lattice';
  /** Rendered size. `lattice` ignores this for width and fills its container. */
  size?: 'sm' | 'md' | 'lg';
  /** Accent colour. */
  tone?: 'brass' | 'ink' | 'muted' | 'clay' | 'sage' | 'sun' | 'rose' | 'sea';
  className?: string;
}

/**
 * The Moroccan geometric motif, drawn as inline SVG.
 *
 * This is the brand's cultural signature and the one piece of decoration in
 * the system, so it is used sparingly: once on a menu cover, or as the centre
 * of a section rule. It is decorative only and is hidden from screen readers.
 */
export function Ornament({
  variant = 'star',
  size = 'md',
  tone = 'brass',
  className,
}: OrnamentProps) {
  const classes = cx('ci-ornament', `ci-ornament--${variant}`, `ci-ornament--${size}`, `ci-ornament--${tone}`, className);
  // Pattern ids must be unique per instance or several lattices on one page
  // all resolve to the first one's fill. useId's colons are stripped so the
  // value stays a valid url(#…) fragment reference.
  const patternId = `ci-lattice-${useId().replace(/:/g, '')}`;

  if (variant === 'lattice') {
    return (
      <svg className={classes} aria-hidden="true" focusable="false" preserveAspectRatio="none" viewBox="0 0 96 16">
        <defs>
          <pattern id={patternId} width="16" height="16" patternUnits="userSpaceOnUse">
            <path
              d="M8 0 L16 8 L8 16 L0 8 Z M8 4.5 L11.5 8 L8 11.5 L4.5 8 Z"
              fill="currentColor"
              fillRule="evenodd"
              opacity="0.55"
            />
          </pattern>
        </defs>
        <rect width="96" height="16" fill={`url(#${patternId})`} />
      </svg>
    );
  }

  if (variant === 'diamond') {
    return (
      <svg className={classes} aria-hidden="true" focusable="false" viewBox="0 0 24 24">
        <path d="M12 2 L22 12 L12 22 L2 12 Z" fill="none" stroke="currentColor" strokeWidth="1.25" />
        <path d="M12 7.5 L16.5 12 L12 16.5 L7.5 12 Z" fill="currentColor" opacity="0.5" />
      </svg>
    );
  }

  // Two squares, one rotated 45° — the eight-point star of zellige tilework.
  return (
    <svg className={classes} aria-hidden="true" focusable="false" viewBox="0 0 24 24">
      <rect x="4.5" y="4.5" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.1" />
      <path d="M12 1.4 L22.6 12 L12 22.6 L1.4 12 Z" fill="none" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="12" cy="12" r="2.1" fill="currentColor" opacity="0.55" />
    </svg>
  );
}
