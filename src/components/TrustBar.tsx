import { trustStats } from '../data/siteContent';

export default function TrustBar() {
  return (
    <section aria-label="Firm credentials" className="bg-ivory py-8">
      <div className="mx-auto grid max-w-7xl gap-3 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {trustStats.map((stat) => (
          <div key={stat.label} className="rounded-3xl border border-charcoal/10 bg-white/70 p-6">
            <p className="font-serif text-4xl text-charcoal">{stat.value}</p>
            <p className="mt-2 text-sm leading-6 text-warm-gray">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
