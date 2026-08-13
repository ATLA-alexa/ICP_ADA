import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cx } from '../utils';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  /** Visual weight. `primary` is brass-filled; `secondary` is outlined; `ghost` is bare; `link` reads as text. */
  variant?: 'primary' | 'secondary' | 'ghost' | 'link';
  /** Control height and type size. */
  size?: 'sm' | 'md' | 'lg';
  /** Stretch to the width of the container. */
  fullWidth?: boolean;
  /** Show a spinner and block interaction. */
  loading?: boolean;
  /** Element rendered before the label — an icon or the zellige motif. */
  iconStart?: ReactNode;
  /** Element rendered after the label. */
  iconEnd?: ReactNode;
  children?: ReactNode;
  className?: string;
}

/**
 * The action control.
 *
 * A menu is mostly reading, so buttons appear rarely — ordering, downloading a
 * PDF, switching language. `primary` is brass rather than a bright accent so
 * it stays inside the calm palette even when it is the loudest thing on screen.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  iconStart,
  iconEnd,
  disabled,
  children,
  className,
  type = 'button',
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={cx(
        'ci-button',
        `ci-button--${variant}`,
        `ci-button--${size}`,
        fullWidth && 'ci-button--full',
        loading && 'ci-button--loading',
        className,
      )}
    >
      {loading && <span className="ci-button__spinner" aria-hidden="true" />}
      {!loading && iconStart && <span className="ci-button__icon">{iconStart}</span>}
      <span className="ci-button__label">{children}</span>
      {!loading && iconEnd && <span className="ci-button__icon">{iconEnd}</span>}
    </button>
  );
}
