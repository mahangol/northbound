import { finalCta } from '@/lib/content';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { BearingLine } from '@/components/ui/BearingLine';

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-900/40 blur-[140px]" />
      </div>
      <div className="site-container">
        <div className="mx-auto max-w-2xl text-center">
          <ScrollReveal>
            <BearingLine strokeColor="rgba(254,250,239,0.18)" className="mb-9" />
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2 className="heading-display text-balance text-[2.25rem] leading-[1.1] text-paper sm:text-[3rem]">
              {finalCta.heading}{' '}
              <span className="font-serif italic text-brass-400">{finalCta.headingEmphasis}</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <p className="mx-auto mt-5 max-w-md text-balance text-base leading-relaxed text-paper/60">
              {finalCta.sub}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.24}>
            <div className="mt-9 flex flex-col items-center gap-3.5 sm:flex-row sm:justify-center">
              <Button href={finalCta.ctaPrimary.href} variant="onDark" size="lg" withArrow>
                {finalCta.ctaPrimary.label}
              </Button>
              <a
                href={finalCta.ctaSecondary.href}
                className="link-underline text-sm font-medium text-paper/70 hover:text-paper"
              >
                {finalCta.ctaSecondary.label}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
