import type { ReactNode } from 'react';
import { cx } from '../utils';

export interface ThemeProviderProps {
  /** Which time of day the surface represents. `day` is warm limestone; `evening` is the same room after sunset. */
  theme?: 'day' | 'evening';
  /** Render as a full-height page surface rather than an inline block. */
  fullBleed?: boolean;
  /** Content styled by the design system. */
  children?: ReactNode;
  className?: string;
}

/**
 * Root wrapper for anything built with Car-Ibiza.
 *
 * It sets the `.ci-root` class (which applies the brand typeface, canvas
 * colour and ink) and the `data-theme` attribute that selects the day or
 * evening token set. Components still render without it — the tokens are
 * defined on `:root` — but text will fall back to the host page's font and
 * the evening theme cannot be selected, so wrap your tree in it.
 */
export function ThemeProvider({
  theme = 'day',
  fullBleed = false,
  children,
  className,
}: ThemeProviderProps) {
  return (
    <div
      className={cx('ci-root', fullBleed && 'ci-root--full-bleed', className)}
      data-theme={theme}
    >
      {children}
    </div>
  );
}
