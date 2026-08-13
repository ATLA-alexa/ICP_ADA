import type { ReactNode } from 'react';
import { cx } from '../utils';

export interface TextProps {
  /** Type size from the scale. */
  size?: 'xs' | 'sm' | 'md' | 'lg';
  /** Ink treatment. Drink descriptions are usually `muted`. */
  tone?: 'default' | 'muted' | 'subtle' | 'brass' | 'inverse';
  /** Font weight. */
  weight?: 'regular' | 'medium' | 'semibold';
  /** Set in the display serif instead of the text face — for pull quotes and drink names. */
  serif?: boolean;
  /** Italic, for tasting notes and asides. */
  italic?: boolean;
  /** Constrain to a comfortable reading measure (~62 characters). */
  measured?: boolean;
  /** Render as a `<span>` rather than a `<p>`. */
  inline?: boolean;
  children?: ReactNode;
  className?: string;
}

/**
 * Body copy — descriptions, notes, fine print.
 *
 * Defaults to Inter for fast reading at small sizes; set `serif` when the text
 * is part of the brand's voice rather than its information (a pull quote, a
 * drink name inside a paragraph).
 */
export function Text({
  size = 'md',
  tone = 'default',
  weight = 'regular',
  serif = false,
  italic = false,
  measured = false,
  inline = false,
  children,
  className,
}: TextProps) {
  const Tag = inline ? 'span' : 'p';
  return (
    <Tag
      className={cx(
        'ci-text',
        `ci-text--${size}`,
        `ci-text--${tone}`,
        `ci-text--${weight}`,
        serif && 'ci-text--serif',
        italic && 'ci-text--italic',
        measured && 'ci-text--measured',
        className,
      )}
    >
      {children}
    </Tag>
  );
}
