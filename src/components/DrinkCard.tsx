import type { ReactNode } from 'react';
import { cx } from '../utils';
import { PriceTag } from './PriceTag';

export interface DrinkCardProps {
  /** The drink's name. */
  name: string;
  /** Two or three lines on what it is and how it tastes. */
  description?: string;
  /** Price. */
  price?: number | string;
  /** Currency symbol passed through to the price. */
  currency?: string;
  /** Family colour — this is the drink's "paint" and drives the swatch and rule. */
  tone?: 'clay' | 'sage' | 'sun' | 'rose' | 'sea' | 'brass';
  /** Glass and serve note — "Tall glass, over ice". */
  serve?: string;
  /** Badges rendered under the description. */
  badges?: ReactNode;
  /** Mark as a house signature, adding a brass rule above the name. */
  signature?: boolean;
  /** Layout. `stacked` is a portrait card for grids; `inline` is a wide row. */
  layout?: 'stacked' | 'inline';
  className?: string;
}

/**
 * A featured drink, given more room than a `MenuItem` line.
 *
 * Used for the eight mocktails and anything else the house wants to sell by
 * description rather than by name alone. The colour swatch is the one place
 * the accent appears at size — it stands in for the drink itself, which is why
 * `tone` should match what is actually in the glass.
 */
export function DrinkCard({
  name,
  description,
  price,
  currency,
  tone = 'sea',
  serve,
  badges,
  signature = false,
  layout = 'stacked',
  className,
}: DrinkCardProps) {
  return (
    <article
      className={cx(
        'ci-drink-card',
        `ci-drink-card--${tone}`,
        `ci-drink-card--${layout}`,
        signature && 'ci-drink-card--signature',
        className,
      )}
    >
      <span className="ci-drink-card__swatch" aria-hidden="true" />
      <div className="ci-drink-card__body">
        {signature && <span className="ci-drink-card__flag">House signature</span>}
        <div className="ci-drink-card__head">
          <h3 className="ci-drink-card__name">{name}</h3>
          {price !== undefined && (
            <PriceTag value={price} currency={currency} size="sm" className="ci-drink-card__price" />
          )}
        </div>
        {description && <p className="ci-drink-card__description">{description}</p>}
        {serve && <p className="ci-drink-card__serve">{serve}</p>}
        {badges && <div className="ci-drink-card__badges">{badges}</div>}
      </div>
    </article>
  );
}
