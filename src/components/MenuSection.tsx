import type { ReactNode } from 'react';
import { cx } from '../utils';
import { Eyebrow } from './Eyebrow';
import { Heading } from './Heading';

export interface MenuSectionProps {
  /** Section title — "Barista", "Mocktails". */
  title: string;
  /** Small caps label above the title, usually the family or a serve note. */
  eyebrow?: string;
  /** One line under the title describing the section. */
  description?: string;
  /** Family colour, applied to the eyebrow and the section rule. */
  tone?: 'brass' | 'clay' | 'sage' | 'sun' | 'rose' | 'sea';
  /** Centre the section header. */
  align?: 'start' | 'center';
  /** Lay the items out in two columns on wide screens. */
  columns?: 1 | 2;
  /** The section's items. */
  children?: ReactNode;
  className?: string;
}

/**
 * A titled block of menu items.
 *
 * This is the main structural unit of a Car-Ibiza menu: a family colour, a
 * title, and its items. Give each section a different `tone` so the colour
 * coding carries across the whole menu — that is what lets the drinks be the
 * paint while the page stays a calm canvas.
 */
export function MenuSection({
  title,
  eyebrow,
  description,
  tone = 'brass',
  align = 'start',
  columns = 1,
  children,
  className,
}: MenuSectionProps) {
  return (
    <section className={cx('ci-menu-section', `ci-menu-section--${tone}`, `ci-menu-section--align-${align}`, className)}>
      <header className="ci-menu-section__header">
        {eyebrow && (
          <Eyebrow tone={tone} align={align}>
            {eyebrow}
          </Eyebrow>
        )}
        <Heading size="lg" level={2} align={align}>
          {title}
        </Heading>
        {description && <p className="ci-menu-section__description">{description}</p>}
      </header>
      <div className={cx('ci-menu-section__items', columns === 2 && 'ci-menu-section__items--two-col')}>
        {children}
      </div>
    </section>
  );
}
