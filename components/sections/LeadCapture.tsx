'use client';

import { useState, useTransition } from 'react';
import { motion } from 'framer-motion';
import { Check, Loader2 } from 'lucide-react';
import { leadCapture } from '@/lib/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { submitLeadForm } from '@/lib/actions';

type FormErrors = Record<string, string>;

export function LeadCapture() {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  function handleSubmit(formData: FormData) {
    setErrors({});
    startTransition(async () => {
      const result = await submitLeadForm(formData);
      if (result.success) {
        setSuccess(true);
      } else {
        setErrors(result.errors ?? {});
      }
    });
  }

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="site-container">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow={leadCapture.eyebrow}
              heading={leadCapture.heading}
              sub={leadCapture.sub}
            />
            <ScrollReveal delay={0.2} className="mt-10 hidden flex-col gap-5 sm:flex">
              <div className="flex items-center gap-3 text-sm text-ink-600">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-ink">
                  <Check className="h-4 w-4" strokeWidth={2.25} />
                </span>
                No slide deck on the first call
              </div>
              <div className="flex items-center gap-3 text-sm text-ink-600">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-ink">
                  <Check className="h-4 w-4" strokeWidth={2.25} />
                </span>
                Senior strategist, not a salesperson
              </div>
              <div className="flex items-center gap-3 text-sm text-ink-600">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-ink">
                  <Check className="h-4 w-4" strokeWidth={2.25} />
                </span>
                Response within one business day
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7">
            <ScrollReveal delay={0.1}>
              <div className="card-surface relative overflow-hidden p-8 sm:p-10">
                {success ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center py-10 text-center"
                  >
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ink text-paper">
                      <Check className="h-6 w-6" strokeWidth={2.5} />
                    </span>
                    <h3 className="mt-6 font-display text-2xl font-medium tracking-tight text-ink">
                      {leadCapture.successHeading}
                    </h3>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-600">
                      {leadCapture.successBody}
                    </p>
                  </motion.div>
                ) : (
                  <form action={handleSubmit} className="flex flex-col gap-5" noValidate>
                    {/* Honeypot — hidden from real users, catches simple bots */}
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden"
                      aria-hidden="true"
                    />

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <Field
                        label={leadCapture.fields.name}
                        name="name"
                        type="text"
                        autoComplete="name"
                        error={errors.name}
                        required
                      />
                      <Field
                        label={leadCapture.fields.email}
                        name="email"
                        type="email"
                        autoComplete="email"
                        error={errors.email}
                        required
                      />
                    </div>

                    <Field
                      label={leadCapture.fields.company}
                      name="company"
                      type="text"
                      autoComplete="organization"
                      error={errors.company}
                      required
                    />

                    <div>
                      <label htmlFor="spend" className="mb-2 block text-xs font-medium text-ink-600">
                        {leadCapture.fields.spend}
                        <span className="text-brass-500"> *</span>
                      </label>
                      <select
                        id="spend"
                        name="spend"
                        required
                        defaultValue=""
                        className="w-full rounded-md border border-ink/15 bg-paper-50 px-4 py-3 text-sm text-ink transition-colors duration-200 focus:border-ink/40"
                      >
                        <option value="" disabled>
                          Select a range
                        </option>
                        {leadCapture.spendOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.spend && <p className="mt-1.5 text-xs text-red-600">{errors.spend}</p>}
                    </div>

                    <div>
                      <label htmlFor="message" className="mb-2 block text-xs font-medium text-ink-600">
                        {leadCapture.fields.message}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        maxLength={1000}
                        className="w-full resize-none rounded-md border border-ink/15 bg-paper-50 px-4 py-3 text-sm text-ink transition-colors duration-200 focus:border-ink/40"
                        placeholder="A sentence or two is plenty."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isPending}
                      className="btn-primary mt-1 w-full disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {isPending ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Submitting
                        </>
                      ) : (
                        leadCapture.submitLabel
                      )}
                    </button>

                    <p className="text-center text-xs leading-relaxed text-ink-400">
                      {leadCapture.consentNote}
                    </p>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  autoComplete,
  error,
  required,
}: {
  label: string;
  name: string;
  type: string;
  autoComplete?: string;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-xs font-medium text-ink-600">
        {label}
        {required && <span className="text-brass-500"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="w-full rounded-md border border-ink/15 bg-paper-50 px-4 py-3 text-sm text-ink transition-colors duration-200 focus:border-ink/40"
      />
      {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}
    </div>
  );
}
