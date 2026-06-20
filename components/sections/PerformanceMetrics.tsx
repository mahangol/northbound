import { metrics } from '@/lib/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal, StaggerGroup, StaggerItem } from '@/components/ui/ScrollReveal';
import { BearingLine } from '@/components/ui/BearingLine';
import { CountUp } from '@/components/ui/CountUp';

export function PerformanceMetrics() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 lg:py-32">
      <div className="grain-overlay opacity-[0.04]" />
      <div className="site-container relative">
        <SectionHeading
          eyebrow={metrics.eyebrow}
          heading={metrics.heading}
          sub={metrics.sub}
          onDark
        />

        <ScrollReveal delay={0.2} className="mt-12">
          <BearingLine strokeColor="rgba(254,250,239,0.18)" label="000°–360°" />
        </ScrollReveal>

        <StaggerGroup
          staggerDelay={0.1}
          className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-paper/10 bg-paper/10 lg:grid-cols-4"
        >
          {metrics.stats.map((stat) => (
            <StaggerItem key={stat.label} className="bg-ink px-6 py-9 sm:px-8 sm:py-11">
              <CountUp
                value={stat.value}
                className="block font-display text-4xl font-medium tracking-tightest text-paper sm:text-5xl"
              />
              <p className="mt-3 text-sm font-medium text-sky-300">{stat.label}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-paper/45">{stat.detail}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
