import { useId } from 'react';
import { cx } from '../utils';

export interface OrnamentProps {
  /**
   * Which motif to draw. `star` is the eight-point zellige star, `diamond` a
   * single lozenge for tight spaces, `lattice` a repeating band for section
   * headers and menu covers.
   */
  variant?: 'star' | 'diamond' | 'lattice';
  /** Rendered size. `lattice` takes the full width of its container and uses this for band height. */
  size?: 'sm' | 'md' | 'lg';
  /** Accent colour. */
  tone?: 'brass' | 'ink' | 'muted' | 'clay' | 'sage' | 'sun' | 'rose' | 'sea';
  className?: string;
}

/** Band height in px per size — also the lattice tile size, so exactly one row of tiles shows. */
const LATTICE_TILE = { sm: 10, md: 16, lg: 24 } as const;

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
    const t = LATTICE_TILE[size];
    const mid = t / 2;
    const inset = 0.75;
    return (
      // No viewBox: the pattern tiles in real pixels, so the motif keeps its
      // proportions at any container width. A stretched viewBox flattens it.
      <svg className={classes} aria-hidden="true" focusable="false" width="100%" height={t}>
        <defs>
          <pattern id={patternId} width={t} height={t} patternUnits="userSpaceOnUse">
            <path
              d={`M${mid} ${inset} L${t - inset} ${mid} L${mid} ${t - inset} L${inset} ${mid} Z`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.75"
            />
            <path
              d={`M${mid} ${t * 0.34} L${t * 0.66} ${mid} L${mid} ${t * 0.66} L${t * 0.34} ${mid} Z`}
              fill="currentColor"
              opacity="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height={t} fill={`url(#${patternId})`} />
      </svg>
    );
  }

  if (variant === 'diamond') {
    return (
      <svg className={classes} aria-hidden="true" focusable="false" viewBox="0 0 24 24">
        <path
          d="M12 2 L22 12 L12 22 L2 12 Z M12 7.5 L16.5 12 L12 16.5 L7.5 12 Z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </svg>
    );
  }

  // The eight-point zellige star: alternating outer and inner radii, with a
  // small diamond knocked out of the centre. The points are deep (inner radius
  // half the outer) — the shallower two-squares construction reads as a cog
  // once it is filled, and turns to mush below 24px.
  return (
    <svg className={classes} aria-hidden="true" focusable="false" viewBox="0 0 24 24">
      <path
        d="M12 1.5 L14.01 7.15 L19.42 4.58 L16.85 9.99 L22.5 12 L16.85 14.01 L19.42 19.42 L14.01 16.85 L12 22.5 L9.99 16.85 L4.58 19.42 L7.15 14.01 L1.5 12 L7.15 9.99 L4.58 4.58 L9.99 7.15 Z M12 9.4 L14.6 12 L12 14.6 L9.4 12 Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}
