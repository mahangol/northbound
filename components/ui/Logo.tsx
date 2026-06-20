import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
  showWordmark?: boolean;
}

/**
 * Northbound logomark: an arrow/needle bisecting a compass ring,
 * fixed at a 27° bearing — a deliberate, specific angle rather than a
 * generic "pointing up-right" arrow, reinforcing the brand's directional
 * metaphor (a heading you hold, not a vague upward trend).
 */
export function Logo({ className, variant = 'dark', showWordmark = true }: LogoProps) {
  const ink = variant === 'dark' ? '#182350' : '#FEFAEF';

  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="12.5" stroke={ink} strokeWidth="1.4" />
        <path
          d="M14 5.5L18.5 18L14 15.3L9.5 18L14 5.5Z"
          fill={ink}
          transform="rotate(27 14 14)"
        />
      </svg>
      {showWordmark && (
        <span
          className={cn(
            'font-display text-[1.0625rem] font-semibold tracking-tightest',
            variant === 'dark' ? 'text-ink' : 'text-paper'
          )}
        >
          Northbound
        </span>
      )}
    </div>
  );
}
