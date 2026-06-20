'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { announcement } from '@/lib/content';

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence initial={false}>
      {visible && (
        <motion.div
          initial={{ height: 'auto' }}
          exit={{ height: 0 }}
          transition={{ duration: 0.35, ease: [0.65, 0, 0.35, 1] }}
          className="overflow-hidden bg-ink"
        >
          <div className="site-container relative flex items-center justify-center gap-3 py-2.5 text-center">
            <p className="text-[0.8125rem] font-medium text-paper/90">
              {announcement.text}{' '}
              <a
                href={announcement.href}
                className="link-underline font-semibold text-sky-300"
              >
                {announcement.linkLabel}
              </a>
            </p>
            <button
              onClick={() => setVisible(false)}
              aria-label="Dismiss announcement"
              className="absolute right-5 flex h-5 w-5 items-center justify-center rounded-full text-paper/50 transition-colors hover:bg-paper/10 hover:text-paper sm:right-8 lg:right-10"
            >
              <X className="h-3.5 w-3.5" strokeWidth={2} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
