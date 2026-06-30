import { faqs } from '../data/siteContent';

export default function FAQ() {
  return (
    <section id="faq" className="section bg-warm-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2 className="section-title">Questions people often ask before they call.</h2>
          <p className="section-copy">
            It is normal to feel unsure at the start. These answers are general only, and your consultation will focus on your situation.
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-3xl border border-charcoal/10 bg-ivory p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-serif text-xl text-charcoal focus-ring rounded-xl">
                {faq.question}
                <span className="shrink-0 text-2xl text-teal transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-base leading-7 text-warm-gray">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
