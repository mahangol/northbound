'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { faq } from '@/lib/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="site-container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow={faq.eyebrow} heading={faq.heading} />
          </div>

          <div className="lg:col-span-8">
            <div className="flex flex-col">
              {faq.items.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                  <ScrollReveal key={item.question} delay={i * 0.04}>
                    <div className="border-b border-ink/[0.08]">
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : i)}
                        className="flex w-full items-center justify-between gap-6 py-6 text-left"
                        aria-expanded={isOpen}
                      >
                        <span className="font-display text-base font-medium tracking-tight text-ink sm:text-lg">
                          {item.question}
                        </span>
                        <motion.span
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
                          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink"
                        >
                          <Plus className="h-3.5 w-3.5" strokeWidth={2} />
                        </motion.span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="max-w-xl pb-6 text-[0.9375rem] leading-relaxed text-ink-600">
                              {item.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
