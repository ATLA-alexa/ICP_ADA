import { cx } from '../utils';
import { Ornament } from './Ornament';

export interface DividerProps {
  /** `plain` is a hairline; `ornamented` centres a motif in the rule; `lattice` is a patterned band. */
  variant?: 'plain' | 'ornamented' | 'lattice';
  /** Vertical space above and below. */
  spacing?: 'none' | 'sm' | 'md' | 'lg';
  /** Line colour. */
  tone?: 'line' | 'brass' | 'strong';
  className?: string;
}

/**
 * Horizontal rule for separating menu sections.
 *
 * `ornamented` is the brand's section break — a hairline interrupted by the
 * zellige star. Use `plain` between items within a section so the ornamented
 * rule keeps its weight as a higher-level separator.
 */
export function Divider({
  variant = 'plain',
  spacing = 'md',
  tone = 'line',
  className,
}: DividerProps) {
  const classes = cx(
    'ci-divider',
    `ci-divider--${variant}`,
    `ci-divider--spacing-${spacing}`,
    `ci-divider--${tone}`,
    className,
  );

  if (variant === 'ornamented') {
    return (
      <div className={classes} role="separator">
        <span className="ci-divider__line" />
        <Ornament variant="star" size="sm" tone={tone === 'brass' ? 'brass' : 'muted'} />
        <span className="ci-divider__line" />
      </div>
    );
  }

  if (variant === 'lattice') {
    return (
      <div className={classes} role="separator">
        <Ornament variant="lattice" size="sm" tone={tone === 'brass' ? 'brass' : 'muted'} />
      </div>
    );
  }

  return <hr className={classes} />;
}
