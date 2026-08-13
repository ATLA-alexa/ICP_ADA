import type { ReactNode } from 'react';
import { cx } from '../utils';
import { PriceTag } from './PriceTag';

export interface MenuItemProps {
  /** The drink or dish name. */
  name: string;
  /** One line of description — ingredients, method, tasting note. */
  description?: string;
  /** Price. Omit for items priced by their options row. */
  price?: number | string;
  /** Currency symbol passed through to the price. */
  currency?: string;
  /** Second price for a larger serve. */
  altPrice?: number | string;
  /** Serve note shown under the price — "Tall", "12oz". */
  priceNote?: string;
  /** Badges rendered after the name — attributes like "Sparkling" or "New". */
  badges?: ReactNode;
  /** Draw a dotted leader between the name and the price, the classic printed-menu look. */
  leader?: boolean;
  /** Dim the item and mark it unavailable. */
  unavailable?: boolean;
  className?: string;
}

/**
 * One line on the menu: name, description, price.
 *
 * The `leader` dots are the traditional device for carrying the eye across to
 * the price, and they hold up when descriptions are uneven in length. Turn
 * them off for dense sections where several items sit close together.
 */
export function MenuItem({
  name,
  description,
  price,
  currency,
  altPrice,
  priceNote,
  badges,
  leader = true,
  unavailable = false,
  className,
}: MenuItemProps) {
  return (
    <div className={cx('ci-menu-item', unavailable && 'ci-menu-item--unavailable', className)}>
      <div className="ci-menu-item__head">
        <span className="ci-menu-item__name">{name}</span>
        {badges && <span className="ci-menu-item__badges">{badges}</span>}
        {leader && <span className="ci-menu-item__leader" aria-hidden="true" />}
        {price !== undefined && (
          <PriceTag
            value={price}
            currency={currency}
            altValue={altPrice}
            note={priceNote}
            size="sm"
            tone={unavailable ? 'muted' : 'default'}
            className="ci-menu-item__price"
          />
        )}
      </div>
      {description && <p className="ci-menu-item__description">{description}</p>}
    </div>
  );
}
