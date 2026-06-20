'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { Button } from '@/components/ui/Button';
import { nav } from '@/lib/content';
import { cn } from '@/lib/utils';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300 ease-smooth',
        scrolled
          ? 'border-b border-ink/[0.06] bg-paper/85 backdrop-blur-md'
          : 'border-b border-transparent bg-paper/0'
      )}
    >
      <div className="site-container flex h-[76px] items-center justify-between">
        <a href="#top" aria-label="Northbound home">
          <Logo />
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-underline text-sm font-medium text-ink-600 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href={nav.cta.href} variant="primary" className="text-[0.8125rem]">
            {nav.cta.label}
          </Button>
        </div>

        <button
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          className="flex h-10 w-10 items-center justify-center rounded-md text-ink lg:hidden"
        >
          <Menu className="h-5 w-5" strokeWidth={1.8} />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-ink lg:hidden"
          >
            <div className="site-container flex h-[76px] items-center justify-between">
              <Logo variant="light" />
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-md text-paper"
              >
                <X className="h-5 w-5" strokeWidth={1.8} />
              </button>
            </div>
            <motion.nav
              className="site-container mt-8 flex flex-col gap-1"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
            >
              {nav.links.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  variants={{
                    hidden: { opacity: 0, x: -16 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="border-b border-paper/10 py-4 text-2xl font-medium text-paper"
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.nav>
            <div className="site-container mt-8">
              <Button
                href={nav.cta.href}
                variant="onDark"
                className="w-full"
                onClick={() => setMobileOpen(false)}
              >
                {nav.cta.label}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
