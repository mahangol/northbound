import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { ScrollReveal } from './ScrollReveal';

interface SectionHeadingProps {
  eyebrow?: string;
  heading: ReactNode;
  sub?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
  onDark?: boolean;
}

export function SectionHeading({
  eyebrow,
  heading,
  sub,
  align = 'left',
  className,
  onDark = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && (
        <ScrollReveal>
          <span
            className={cn(
              'eyebrow mb-4',
              onDark ? 'text-sky-300' : 'text-brass-500'
            )}
          >
            <span className={cn('h-1 w-1 rounded-full', onDark ? 'bg-sky-300' : 'bg-brass-500')} />
            {eyebrow}
          </span>
        </ScrollReveal>
      )}
      <ScrollReveal delay={0.08}>
        <h2
          className={cn(
            'heading-display text-balance text-[2rem] leading-[1.12] sm:text-[2.5rem] lg:text-[2.875rem]',
            onDark && 'text-paper'
          )}
        >
          {heading}
        </h2>
      </ScrollReveal>
      {sub && (
        <ScrollReveal delay={0.16}>
          <p
            className={cn(
              'mt-5 text-balance text-[1.0625rem] leading-relaxed',
              onDark ? 'text-paper/70' : 'text-ink-600'
            )}
          >
            {sub}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
