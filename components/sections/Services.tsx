'use client';

import { motion } from 'framer-motion';
import { services } from '@/lib/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StaggerGroup, StaggerItem } from '@/components/ui/ScrollReveal';

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="site-container">
        <SectionHeading
          eyebrow={services.eyebrow}
          heading={services.heading}
          sub={services.sub}
        />

        <StaggerGroup
          staggerDelay={0.06}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.items.map((service) => (
            <StaggerItem key={service.code}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="card-surface group flex h-full flex-col p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xs uppercase tracking-widest text-brass-500">
                    {service.code}
                  </span>
                  <span className="h-6 w-6 rounded-full border border-ink/10 transition-colors duration-300 group-hover:border-brass-400 group-hover:bg-brass-50" />
                </div>
                <h3 className="mt-5 font-display text-lg font-medium tracking-tight text-ink">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-600">
                  {service.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
