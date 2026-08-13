import { cx } from '../utils';

export interface OptionRowProps {
  /** What the choices are for — "Milk", "Serve", "Strength". */
  label: string;
  /** The available choices, printed as a separated list. */
  options: string[];
  /** Which choice is the default, rendered in brass. Must match one of `options` exactly. */
  defaultOption?: string;
  /** Surcharge note shown at the end — "+€0.50 for plant milks". */
  note?: string;
  /** Type size. */
  size?: 'sm' | 'md';
  className?: string;
}

/**
 * A row of choices attached to a section — milks, serves, strengths.
 *
 * Menus repeat these endlessly ("Full fat, Oat, Almond, Coconut" under every
 * coffee), so state them once per section instead. The default choice is
 * marked in brass rather than with the word "default", which keeps the row
 * short enough to read as one line.
 */
export function OptionRow({
  label,
  options,
  defaultOption,
  note,
  size = 'sm',
  className,
}: OptionRowProps) {
  return (
    <div className={cx('ci-option-row', `ci-option-row--${size}`, className)}>
      <span className="ci-option-row__label">{label}</span>
      <span className="ci-option-row__options">
        {options.map((option, i) => (
          <span key={option}>
            <span className={cx('ci-option-row__option', option === defaultOption && 'ci-option-row__option--default')}>
              {option}
            </span>
            {i < options.length - 1 && <span className="ci-option-row__sep" aria-hidden="true"> · </span>}
          </span>
        ))}
      </span>
      {note && <span className="ci-option-row__note">{note}</span>}
    </div>
  );
}
