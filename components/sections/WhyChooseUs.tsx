import { whyChooseUs } from '@/lib/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StaggerGroup, StaggerItem } from '@/components/ui/ScrollReveal';

export function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32">
      <div className="site-container">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow={whyChooseUs.eyebrow}
              heading={whyChooseUs.heading}
              sub={whyChooseUs.sub}
            />
          </div>

          <StaggerGroup
            staggerDelay={0.08}
            className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-ink/[0.08] bg-ink/[0.08] sm:grid-cols-2 lg:col-span-8"
          >
            {whyChooseUs.points.map((point, i) => (
              <StaggerItem key={point.title} className="bg-paper-50 p-8">
                <span className="font-mono text-2xs text-brass-500">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-display text-lg font-medium tracking-tight text-ink">
                  {point.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-600">
                  {point.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
