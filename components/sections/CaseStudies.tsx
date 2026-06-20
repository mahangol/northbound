'use client';

import { motion } from 'framer-motion';
import { caseStudies } from '@/lib/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ArrowUpRight } from 'lucide-react';

export function CaseStudies() {
  return (
    <section id="work" className="bg-paper-200/40 py-24 lg:py-32">
      <div className="site-container">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow={caseStudies.eyebrow}
            heading={caseStudies.heading}
            sub={caseStudies.sub}
            className="max-w-xl"
          />
        </div>

        <div className="mt-14 flex flex-col gap-5">
          {caseStudies.items.map((study, i) => (
            <ScrollReveal key={study.client} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="card-surface group grid grid-cols-1 gap-8 p-8 sm:p-10 lg:grid-cols-12 lg:items-center lg:gap-6"
              >
                <div className="lg:col-span-5">
                  <span className="font-mono text-2xs uppercase tracking-widest text-ink-400">
                    {study.category}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-medium leading-tight tracking-tight text-ink sm:text-[1.625rem]">
                    {study.headline}
                  </h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-600">
                    {study.description}
                  </p>
                  <div className="mt-5 flex items-center gap-2">
                    <span className="text-sm font-semibold text-ink">{study.client}</span>
                    <ArrowUpRight
                      className="h-4 w-4 text-ink-400 transition-transform duration-300 ease-smooth group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brass-500"
                      strokeWidth={2}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 border-t border-ink/[0.06] pt-7 lg:col-span-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                  {[study.stat1, study.stat2, study.stat3].map((stat) => (
                    <div key={stat.label}>
                      <p className="font-display text-3xl font-medium tracking-tightest text-ink sm:text-4xl">
                        {stat.value}
                      </p>
                      <p className="mt-1.5 text-xs leading-snug text-ink-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
