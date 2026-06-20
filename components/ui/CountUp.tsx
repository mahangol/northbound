'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';

interface CountUpProps {
  value: string;
  className?: string;
}

/**
 * Parses a display string like "3.4×", "61%", "$84M", "94%" into a
 * numeric target + prefix/suffix, then animates the number from 0.
 */
export function CountUp({ value, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [display, setDisplay] = useState(value.replace(/[0-9.]/g, (c) => (c === '.' ? '.' : '0')));

  useEffect(() => {
    if (!isInView) return;

    const match = value.match(/^([^0-9]*)([0-9.]+)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const [, prefix, numStr, suffix] = match;
    const target = parseFloat(numStr);
    const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0;

    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) {
        setDisplay(`${prefix}${v.toFixed(decimals)}${suffix}`);
      },
    });

    return () => controls.stop();
  }, [isInView, value]);

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  );
}
