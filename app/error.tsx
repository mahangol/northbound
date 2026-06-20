'use client';

import { useEffect } from 'react';
import { Logo } from '@/components/ui/Logo';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center bg-paper px-6 text-center">
        <Logo className="mb-10" />
        <span className="font-mono text-2xs uppercase tracking-widest text-brass-500">
          Something went off course
        </span>
        <h1 className="heading-display mt-4 text-4xl">We hit some turbulence.</h1>
        <p className="mt-4 max-w-sm text-ink-600">
          An unexpected error occurred. Our team has been notified — try refreshing the page.
        </p>
        <button onClick={() => reset()} className="btn-primary mt-8">
          Try again
        </button>
      </body>
    </html>
  );
}
