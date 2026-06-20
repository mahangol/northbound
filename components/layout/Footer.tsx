import { Logo } from '@/components/ui/Logo';
import { brand, footer, nav } from '@/lib/content';

export function Footer() {
  return (
    <footer className="border-t border-paper/10 bg-ink text-paper">
      <div className="site-container py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper/60">
              {footer.description}
            </p>
            <div className="mt-6 flex items-center gap-4">
              {footer.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="link-underline text-xs font-medium uppercase tracking-widish text-paper/50 hover:text-paper"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-6 lg:col-start-6">
            {footer.columns.map((col) => (
              <div key={col.heading}>
                <h3 className="font-mono text-2xs uppercase tracking-widest text-paper/40">
                  {col.heading}
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="link-underline text-sm text-paper/70 hover:text-paper"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-paper/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-paper/40">
            © {new Date().getFullYear()} {brand.name}. All rights reserved. {brand.addressLine}.
          </p>
          <p className="font-mono text-2xs uppercase tracking-widest text-paper/30">
            Heading 360° / Always reporting
          </p>
        </div>
      </div>
    </footer>
  );
}
