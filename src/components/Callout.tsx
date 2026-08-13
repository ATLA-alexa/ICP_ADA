import type { ReactNode } from 'react';
import { cx } from '../utils';

export interface CalloutProps {
  /** Short label rendered above the body. */
  title?: string;
  /** Accent colour. */
  tone?: 'neutral' | 'brass' | 'sage' | 'clay' | 'sea';
  /** Centre the content — used for closing notes at the foot of a menu. */
  align?: 'start' | 'center';
  children?: ReactNode;
  className?: string;
}

/**
 * A quiet aside on the canvas.
 *
 * Carries the notes a menu needs but should not shout: allergen guidance,
 * "all drinks available decaffeinated", opening hours. Deliberately has no
 * icon and no strong fill so it never reads as a warning banner.
 */
export function Callout({
  title,
  tone = 'neutral',
  align = 'start',
  children,
  className,
}: CalloutProps) {
  return (
    <aside
      className={cx('ci-callout', `ci-callout--${tone}`, `ci-callout--align-${align}`, className)}
    >
      {title && <p className="ci-callout__title">{title}</p>}
      <div className="ci-callout__body">{children}</div>
    </aside>
  );
}
