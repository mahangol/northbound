import { testimonials } from '@/lib/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StaggerGroup, StaggerItem } from '@/components/ui/ScrollReveal';

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32">
      <div className="site-container">
        <SectionHeading
          eyebrow={testimonials.eyebrow}
          heading={testimonials.heading}
          align="center"
          className="mx-auto"
        />

        <StaggerGroup
          staggerDelay={0.08}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2"
        >
          {testimonials.items.map((t) => (
            <StaggerItem key={t.name}>
              <figure className="card-surface flex h-full flex-col justify-between p-8">
                <blockquote>
                  <p className="font-serif text-xl italic leading-snug text-ink sm:text-[1.375rem]">
                    "{t.quote}"
                  </p>
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3 border-t border-ink/[0.06] pt-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink font-mono text-2xs text-paper">
                    {t.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{t.name}</p>
                    <p className="text-xs text-ink-500">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
