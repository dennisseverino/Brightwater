export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-warm-white pt-32 sm:pt-36">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-28">
        <div className="flex flex-col justify-center">
          <p className="mb-5 w-fit rounded-full border border-teal/20 bg-white/70 px-4 py-2 text-sm font-semibold text-teal">
            Brisbane & Gold Coast family lawyers
          </p>
          <h1 className="max-w-4xl font-serif text-5xl leading-[1.04] text-charcoal sm:text-6xl lg:text-7xl">
            Clear family law guidance for the moments that feel hardest to navigate.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-warm-gray">
            When life changes unexpectedly, you deserve practical advice, steady support, and a team who helps you understand your options before you make your next decision.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#consultation" className="rounded-full bg-charcoal px-6 py-4 text-center text-sm font-semibold text-white shadow-soft transition hover:bg-teal focus-ring">
              Book a free 20-minute consultation
            </a>
            <a href="#practice-areas" className="rounded-full border border-charcoal/15 bg-white/70 px-6 py-4 text-center text-sm font-semibold text-charcoal transition hover:border-teal/40 hover:text-teal focus-ring">
              See how we can help
            </a>
          </div>
          <p className="mt-5 text-sm leading-6 text-warm-gray">
            No obligation. You do not need to know exactly what to ask yet.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -left-6 top-12 hidden h-32 w-32 rounded-full bg-sage/35 blur-3xl lg:block" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-image">
            <img
              src="/brightwater-consultation.webp"
              alt="A calm family law consultation in a warm, private office"
              className="h-full min-h-[420px] w-full object-cover"
              fetchPriority="high"
            />
          </div>
          <div className="absolute -bottom-6 left-5 right-5 rounded-3xl border border-charcoal/10 bg-ivory/95 p-5 shadow-soft backdrop-blur sm:left-auto sm:w-80">
            <p className="font-serif text-3xl text-charcoal">18 years</p>
            <p className="mt-1 text-sm leading-6 text-warm-gray">
              Principal solicitor experience across separation, parenting, property, and mediation matters.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
