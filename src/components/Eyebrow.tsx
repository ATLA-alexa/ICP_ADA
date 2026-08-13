import type { ReactNode } from 'react';
import { cx } from '../utils';

export interface EyebrowProps {
  /** Accent colour, usually matching the menu family the section belongs to. */
  tone?: 'default' | 'muted' | 'brass' | 'clay' | 'sage' | 'sun' | 'rose' | 'sea';
  /** Draw a short rule after the label. */
  rule?: boolean;
  /** Centre the label and, when `rule` is set, put a rule on both sides. */
  align?: 'start' | 'center';
  children?: ReactNode;
  className?: string;
}

/**
 * Small letter-spaced caps that sit above a heading.
 *
 * This is the brand's most recognisable typographic move — it labels a menu
 * family ("BARISTA", "MOCKTAILS") without competing with the display type.
 * Keep the content to one or two words; the tracking makes long strings
 * unreadable.
 */
export function Eyebrow({
  tone = 'brass',
  rule = false,
  align = 'start',
  children,
  className,
}: EyebrowProps) {
  return (
    <div
      className={cx(
        'ci-eyebrow',
        `ci-eyebrow--${tone}`,
        rule && 'ci-eyebrow--rule',
        `ci-eyebrow--align-${align}`,
        className,
      )}
    >
      <span className="ci-eyebrow__label">{children}</span>
    </div>
  );
}
