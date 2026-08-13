import type { ReactNode } from 'react';
import { cx } from '../utils';

export interface BadgeProps {
  /** Accent colour. The drink-family tones double as category markers. */
  tone?: 'neutral' | 'brass' | 'clay' | 'sage' | 'sun' | 'rose' | 'sea';
  /** `soft` is a tinted fill, `outline` a hairline, `solid` a full fill for the rare emphatic case. */
  variant?: 'soft' | 'outline' | 'solid';
  /** Size of the label. */
  size?: 'sm' | 'md';
  /** Show a small dot before the label. */
  dot?: boolean;
  children?: ReactNode;
  className?: string;
}

/**
 * A small label for drink attributes — "Sparkling", "Caffeine free", "New".
 *
 * Badges are the busiest element allowed on a menu, so keep them to one or two
 * per item. Pair the tone with the drink family (`clay` for barista, `sea` for
 * mocktails) to reinforce the colour coding rather than introducing new hues.
 */
export function Badge({
  tone = 'neutral',
  variant = 'soft',
  size = 'sm',
  dot = false,
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cx(
        'ci-badge',
        `ci-badge--${variant}`,
        `ci-badge--${tone}`,
        `ci-badge--${size}`,
        className,
      )}
    >
      {dot && <span className="ci-badge__dot" aria-hidden="true" />}
      {children}
    </span>
  );
}
