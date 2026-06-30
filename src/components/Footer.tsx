import { navItems, practiceAreas } from '../data/siteContent';

export default function Footer() {
  return (
    <footer className="bg-ivory">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <p className="font-serif text-3xl text-charcoal">Brightwater Family Law</p>
          <p className="mt-4 max-w-md text-sm leading-6 text-warm-gray">
            Boutique family law advice for Brisbane and Gold Coast families navigating separation, parenting, property, and mediation.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-charcoal">Contact</h2>
          <address className="mt-4 not-italic text-sm leading-7 text-warm-gray">
            Level 8, 145 Eagle Street<br />
            Brisbane QLD 4000<br />
            Servicing the Gold Coast<br />
            <a className="text-charcoal underline-offset-4 hover:underline focus-ring rounded" href="tel:+61730001234">(07) 3000 1234</a><br />
            <a className="text-charcoal underline-offset-4 hover:underline focus-ring rounded" href="mailto:hello@brightwaterfamilylaw.com.au">hello@brightwaterfamilylaw.com.au</a>
          </address>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-charcoal">Quick links</h2>
          <div className="mt-4 grid gap-2 text-sm text-warm-gray">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="w-fit rounded underline-offset-4 hover:text-charcoal hover:underline focus-ring">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-charcoal/10 px-5 py-6 text-xs leading-5 text-warm-gray md:flex-row md:items-center md:justify-between lg:px-8">
        <p>© 2026 Brightwater Family Law. Fictional assessment website.</p>
        <p>Practice areas: {practiceAreas.map((area) => area.title).join(', ')}.</p>
      </div>
    </footer>
  );
}
