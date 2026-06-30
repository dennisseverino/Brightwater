import { useState } from 'react';
import { navItems } from '../data/siteContent';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-charcoal/10 bg-ivory/88 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Primary">
        <a href="#top" className="group flex items-center gap-3 focus-ring rounded-full">
          <span className="grid size-10 place-items-center rounded-full bg-sage text-sm font-semibold text-charcoal shadow-soft">
            B
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-lg text-charcoal">Brightwater</span>
            <span className="block text-xs font-medium tracking-[0.18em] text-warm-gray uppercase">Family Law</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-warm-gray transition hover:text-charcoal focus-ring rounded-full">
              {item.label}
            </a>
          ))}
        </div>

        <a href="#consultation" className="hidden rounded-full bg-charcoal px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-teal focus-ring md:inline-flex">
          Book a free consultation
        </a>

        <button
          type="button"
          className="rounded-full border border-charcoal/15 px-4 py-2 text-sm font-semibold text-charcoal focus-ring md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          Menu
        </button>
      </nav>

      {isOpen ? (
        <div id="mobile-menu" className="border-t border-charcoal/10 bg-ivory px-5 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl px-3 py-3 text-base font-medium text-charcoal focus-ring"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#consultation"
              className="mt-2 rounded-full bg-charcoal px-5 py-3 text-center text-sm font-semibold text-white focus-ring"
              onClick={() => setIsOpen(false)}
            >
              Book a free consultation
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
