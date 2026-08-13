import type { ReactNode } from 'react';
import { cx } from '../utils';

export interface CardProps {
  /** Surface treatment. `bordered` is the default menu panel; `raised` lifts off the canvas; `sunk` recedes into it. */
  variant?: 'bordered' | 'raised' | 'sunk' | 'plain';
  /** Inner padding. */
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  /** Draw a coloured rule down the leading edge, tying the card to a menu family. */
  accent?: 'none' | 'brass' | 'clay' | 'sage' | 'sun' | 'rose' | 'sea';
  children?: ReactNode;
  className?: string;
}

/**
 * A panel on the canvas.
 *
 * Cards carry menu sections, notes and featured drinks. Keep elevation low —
 * `raised` is for one or two things per page at most, since heavy shadow
 * fights the flat, plastered look the brand is after.
 */
export function Card({
  variant = 'bordered',
  padding = 'lg',
  accent = 'none',
  children,
  className,
}: CardProps) {
  return (
    <div
      className={cx(
        'ci-card',
        `ci-card--${variant}`,
        `ci-card--padding-${padding}`,
        accent !== 'none' && `ci-card--accent-${accent}`,
        className,
      )}
    >
      {children}
    </div>
  );
}
