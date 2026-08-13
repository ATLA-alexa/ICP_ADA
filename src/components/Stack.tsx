import type { ReactNode } from 'react';
import { cx } from '../utils';

export interface StackProps {
  /** Layout axis. */
  direction?: 'vertical' | 'horizontal';
  /** Space between children, from the spacing scale. */
  gap?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  /** Cross-axis alignment. */
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  /** Main-axis distribution. */
  justify?: 'start' | 'center' | 'end' | 'between';
  /** Allow horizontal stacks to wrap onto more lines. */
  wrap?: boolean;
  /** Render a divider line between each child. */
  divided?: boolean;
  children?: ReactNode;
  className?: string;
}

/**
 * The layout primitive: one axis, one gap, nothing else.
 *
 * Prefer this over ad-hoc flex containers so vertical rhythm stays on the
 * spacing scale. `divided` draws a hairline between children, which is how
 * menu lists are separated throughout the brand.
 */
export function Stack({
  direction = 'vertical',
  gap = 'md',
  align,
  justify,
  wrap = false,
  divided = false,
  children,
  className,
}: StackProps) {
  return (
    <div
      className={cx(
        'ci-stack',
        `ci-stack--${direction}`,
        `ci-stack--gap-${gap}`,
        align && `ci-stack--align-${align}`,
        justify && `ci-stack--justify-${justify}`,
        wrap && 'ci-stack--wrap',
        divided && 'ci-stack--divided',
        className,
      )}
    >
      {children}
    </div>
  );
}
