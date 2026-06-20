'use client';

import { motion } from 'framer-motion';
import { hero } from '@/lib/content';
import { Button } from '@/components/ui/Button';
import { BearingTick } from '@/components/ui/BearingLine';

const easeOut = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-16 sm:pb-28 sm:pt-20 lg:pb-36 lg:pt-24">
      {/* Ambient backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-180px] h-[560px] w-[860px] -translate-x-1/2 rounded-full bg-sky-100 opacity-60 blur-[120px]" />
        <div className="absolute right-[-120px] top-[120px] h-[320px] w-[320px] rounded-full bg-brass-100 opacity-40 blur-[100px]" />
      </div>

      <div className="site-container">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-ink/10 bg-paper-50 px-4 py-1.5 shadow-card"
          >
            <BearingTick />
            <span className="font-mono text-2xs uppercase tracking-widest text-ink-600">
              {hero.eyebrow}
            </span>
          </motion.div>

          <h1 className="heading-display max-w-4xl text-balance text-[2.75rem] leading-[1.04] sm:text-[3.75rem] lg:text-[4.75rem]">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.08 }}
            >
              {hero.headline}
            </motion.span>
            <motion.span
              className="block font-serif italic text-brass-500"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.18 }}
            >
              {hero.headlineEmphasis}.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.3 }}
            className="mt-7 max-w-2xl text-balance text-lg leading-relaxed text-ink-600 sm:text-xl"
          >
            {hero.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.42 }}
            className="mt-10 flex flex-col gap-3.5 sm:flex-row"
          >
            <Button href={hero.ctaPrimary.href} variant="primary" size="lg" withArrow>
              {hero.ctaPrimary.label}
            </Button>
            <Button href={hero.ctaSecondary.href} variant="secondary" size="lg">
              {hero.ctaSecondary.label}
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-8 font-mono text-2xs uppercase tracking-widest text-ink-400"
          >
            {hero.proofLine}
          </motion.p>
        </div>

        {/* Dashboard preview mock */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easeOut, delay: 0.5 }}
          className="relative mx-auto mt-16 max-w-5xl sm:mt-20 lg:mt-24"
        >
          <HeroDashboardMock />
        </motion.div>
      </div>
    </section>
  );
}

function HeroDashboardMock() {
  const bars = [38, 52, 44, 61, 58, 73, 68, 81, 77, 92, 88, 100];
  return (
    <div className="relative overflow-hidden rounded-2xl border border-ink/[0.08] bg-ink shadow-card-hover">
      <div className="grain-overlay" />
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-paper/10 px-5 py-3.5">
        <span className="h-2.5 w-2.5 rounded-full bg-paper/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-paper/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-paper/15" />
        <span className="ml-3 font-mono text-2xs text-paper/30">app.northbound.agency/dashboard</span>
      </div>

      <div className="grid grid-cols-1 gap-px bg-paper/5 sm:grid-cols-3">
        {[
          { label: 'Blended ROAS', value: '4.2×', delta: '+0.8 vs last qtr' },
          { label: 'CAC (30d)', value: '$38.40', delta: '−22% vs baseline' },
          { label: 'Pipeline influenced', value: '$1.84M', delta: '+31% MoM' },
        ].map((stat) => (
          <div key={stat.label} className="bg-ink px-6 py-5">
            <p className="font-mono text-2xs uppercase tracking-widest text-paper/40">{stat.label}</p>
            <p className="mt-2 font-display text-2xl font-medium text-paper">{stat.value}</p>
            <p className="mt-1 text-xs text-sky-300">{stat.delta}</p>
          </div>
        ))}
      </div>

      <div className="border-t border-paper/10 px-6 py-7 sm:px-8 sm:py-9">
        <div className="flex items-end justify-between">
          <p className="font-mono text-2xs uppercase tracking-widest text-paper/40">
            Revenue attributed — trailing 12 months
          </p>
          <span className="font-mono text-2xs text-sky-300">↑ compounding</span>
        </div>
        <div className="mt-6 flex h-32 items-end gap-1.5 sm:h-40 sm:gap-2">
          {bars.map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 + i * 0.04, ease: easeOut }}
              className="flex-1 rounded-t-[3px]"
              style={{
                background:
                  i === bars.length - 1
                    ? '#B9915E'
                    : 'linear-gradient(180deg, rgba(175,210,250,0.9) 0%, rgba(175,210,250,0.25) 100%)',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
