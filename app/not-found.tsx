import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-paper px-6 text-center">
      <Logo className="mb-10" />
      <span className="font-mono text-2xs uppercase tracking-widest text-brass-500">
        Error 404
      </span>
      <h1 className="heading-display mt-4 text-4xl sm:text-5xl">Off bearing.</h1>
      <p className="mt-4 max-w-sm text-ink-600">
        The page you&apos;re looking for doesn&apos;t exist, or it&apos;s moved. Let&apos;s get you back on course.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Return home
      </Link>
    </div>
  );
}
