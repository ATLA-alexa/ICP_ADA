/** Join class names, dropping anything falsy. Internal helper, not exported from the package root. */
export function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ');
}
