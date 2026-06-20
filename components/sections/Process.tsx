'use client';

import { process } from '@/lib/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function Process() {
  return (
    <section id="process" className="bg-ink py-24 lg:py-32">
      <div className="site-container">
        <SectionHeading
          eyebrow={process.eyebrow}
          heading={process.heading}
          sub={process.sub}
          onDark
        />

        <div className="relative mt-16">
          {/* vertical bearing line on desktop */}
          <div className="absolute left-[27px] top-2 hidden h-[calc(100%-16px)] w-px bg-paper/10 lg:block" />

          <div className="flex flex-col gap-10 lg:gap-14">
            {process.steps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 0.06}>
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:items-start lg:gap-8">
                  <div className="flex items-center gap-4 lg:col-span-3">
                    <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-paper/15 bg-ink font-mono text-[0.6875rem] text-sky-300">
                      {step.heading.split(' ')[0]}
                    </span>
                    <span className="font-mono text-2xs uppercase tracking-widest text-paper/40 lg:hidden">
                      {step.duration}
                    </span>
                  </div>

                  <div className="lg:col-span-9">
                    <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:gap-4">
                      <h3 className="font-display text-xl font-medium tracking-tight text-paper sm:text-2xl">
                        {step.title}
                      </h3>
                      <span className="hidden font-mono text-2xs uppercase tracking-widest text-paper/40 lg:inline">
                        {step.duration}
                      </span>
                    </div>
                    <p className="mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-paper/60">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
