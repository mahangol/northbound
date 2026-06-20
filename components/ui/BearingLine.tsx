'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BearingLineProps {
  className?: string;
  strokeColor?: string;
  label?: string;
}

/**
 * Signature element: a heading/bearing line that draws itself across the
 * viewport, ticking like a compass readout. Used sparingly — hero and
 * metrics sections only — to anchor the "direction / compounding" brand
 * metaphor without becoming decorative noise.
 */
export function BearingLine({ className, strokeColor = '#182350', label }: BearingLineProps) {
  return (
    <div className={cn('relative flex items-center gap-3', className)}>
      <svg
        viewBox="0 0 100 2"
        preserveAspectRatio="none"
        className="h-px w-full flex-1"
        aria-hidden="true"
      >
        <motion.line
          x1="0"
          y1="1"
          x2="100"
          y2="1"
          stroke={strokeColor}
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0, opacity: 0.3 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, ease: [0.65, 0, 0.35, 1] }}
        />
      </svg>
      {label && (
        <span className="shrink-0 font-mono text-2xs uppercase tracking-widest text-ink-500">
          {label}
        </span>
      )}
    </div>
  );
}

/**
 * Small ticking compass-style indicator, used in the hero as ambient detail.
 */
export function BearingTick({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-1.5', className)} aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="h-1 w-1 rounded-full bg-brass"
          animate={{ opacity: [0.25, 1, 0.25] }}
          transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}
