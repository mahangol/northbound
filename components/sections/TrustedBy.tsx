import { trustedBy } from '@/lib/content';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function TrustedBy() {
  const logos = [...trustedBy.logos, ...trustedBy.logos];

  return (
    <section className="border-y border-ink/[0.06] bg-paper-200/40 py-12">
      <div className="site-container">
        <ScrollReveal>
          <p className="text-center font-mono text-2xs uppercase tracking-widest text-ink-400">
            {trustedBy.label}
          </p>
        </ScrollReveal>
      </div>
      <div className="relative mt-8 overflow-hidden mask-fade-x">
        <div className="flex w-max animate-marquee items-center gap-16">
          {logos.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="shrink-0 font-display text-xl font-semibold tracking-tightest text-ink-300"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
