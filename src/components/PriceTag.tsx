import { cx } from '../utils';

export interface PriceTagProps {
  /** The amount. Numbers are formatted to two decimals; strings are printed as given. */
  value: number | string;
  /** Currency symbol placed before the amount. */
  currency?: string;
  /** An optional second price for a larger serve, rendered after a slash. */
  altValue?: number | string;
  /** Label for the serve size this price covers — "Tall", "Double". */
  note?: string;
  /** Type size. */
  size?: 'sm' | 'md' | 'lg';
  /** Ink treatment. */
  tone?: 'default' | 'muted' | 'brass';
  className?: string;
}

/**
 * A price, set in the display serif so it sits in the brand's voice.
 *
 * Prices are typographically equal to drink names rather than smaller — on a
 * calm menu the number should not feel hidden. Use `altValue` for the common
 * two-serve case instead of rendering two separate tags.
 */
export function PriceTag({
  value,
  currency = '€',
  altValue,
  note,
  size = 'md',
  tone = 'default',
  className,
}: PriceTagProps) {
  const format = (v: number | string) => (typeof v === 'number' ? v.toFixed(2) : v);
  return (
    <span className={cx('ci-price', `ci-price--${size}`, `ci-price--${tone}`, className)}>
      <span className="ci-price__amount">
        <span className="ci-price__currency">{currency}</span>
        {format(value)}
        {altValue !== undefined && (
          <>
            <span className="ci-price__sep"> / </span>
            <span className="ci-price__currency">{currency}</span>
            {format(altValue)}
          </>
        )}
      </span>
      {note && <span className="ci-price__note">{note}</span>}
    </span>
  );
}
