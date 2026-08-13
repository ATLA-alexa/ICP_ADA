import type { ReactNode } from 'react';
import { cx } from '../utils';

export interface HeadingProps {
  /** Visual size, independent of heading level. */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'display';
  /** Semantic heading level rendered into the DOM. Pick this for document structure, `size` for looks. */
  level?: 1 | 2 | 3 | 4;
  /** Ink treatment. `brass` is for section titles that carry the premium note. */
  tone?: 'default' | 'muted' | 'brass' | 'inverse';
  /** Horizontal alignment. Menu covers are usually centred. */
  align?: 'start' | 'center';
  children?: ReactNode;
  className?: string;
}

/**
 * Display type set in Cormorant Garamond — the brand's voice.
 *
 * Used for menu covers, section titles and drink names. `size` and `level` are
 * deliberately separate so a visually small heading can still be an `<h2>`
 * where the document needs one.
 */
export function Heading({
  size = 'md',
  level = 2,
  tone = 'default',
  align = 'start',
  children,
  className,
}: HeadingProps) {
  const Tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4';
  return (
    <Tag
      className={cx(
        'ci-heading',
        `ci-heading--${size}`,
        `ci-heading--${tone}`,
        `ci-heading--align-${align}`,
        className,
      )}
    >
      {children}
    </Tag>
  );
}
