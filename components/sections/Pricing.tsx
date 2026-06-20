'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { pricing } from '@/lib/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export function Pricing() {
  return (
    <section id="pricing" className="bg-paper-200/40 py-24 lg:py-32">
      <div className="site-container">
        <SectionHeading
          eyebrow={pricing.eyebrow}
          heading={pricing.heading}
          sub={pricing.sub}
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-stretch">
          {pricing.tiers.map((tier, i) => (
            <ScrollReveal key={tier.name} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  'flex h-full flex-col rounded-xl p-8',
                  tier.featured
                    ? 'border border-ink bg-ink text-paper shadow-card-hover'
                    : 'border border-ink/[0.08] bg-paper-50 shadow-card'
                )}
              >
                {tier.featured && (
                  <span className="mb-5 inline-flex w-fit items-center rounded-full bg-brass-400 px-3 py-1 font-mono text-2xs uppercase tracking-widest text-ink">
                    Most coordinated
                  </span>
                )}
                <h3 className={cn('font-display text-xl font-medium', tier.featured ? 'text-paper' : 'text-ink')}>
                  {tier.name}
                </h3>
                <p className={cn('mt-2 text-sm leading-relaxed', tier.featured ? 'text-paper/60' : 'text-ink-600')}>
                  {tier.description}
                </p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className={cn('font-display text-4xl font-medium tracking-tightest', tier.featured ? 'text-paper' : 'text-ink')}>
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className={cn('text-sm', tier.featured ? 'text-paper/50' : 'text-ink-400')}>
                      {tier.period}
                    </span>
                  )}
                </div>

                <ul className="mt-7 flex flex-1 flex-col gap-3.5">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check
                        className={cn('mt-0.5 h-4 w-4 shrink-0', tier.featured ? 'text-sky-300' : 'text-brass-500')}
                        strokeWidth={2.25}
                      />
                      <span className={cn('text-sm leading-snug', tier.featured ? 'text-paper/80' : 'text-ink-600')}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  href="#contact"
                  variant={tier.featured ? 'onDark' : 'secondary'}
                  className="mt-8 w-full"
                >
                  {tier.cta}
                </Button>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-ink-400">{pricing.note}</p>
      </div>
    </section>
  );
}
