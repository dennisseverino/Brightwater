import { practiceAreas } from '../data/siteContent';

export default function PracticeAreas() {
  return (
    <section id="practice-areas" className="section bg-warm-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <p className="eyebrow">Practice areas</p>
          <h2 className="section-title">Support for the decisions that shape what comes next.</h2>
          <p className="section-copy">
            Brightwater helps with the practical and emotional weight of separation, parenting arrangements, property decisions, and resolution pathways.
          </p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {practiceAreas.map((area, index) => (
            <article key={area.title} className="group rounded-[1.75rem] border border-charcoal/10 bg-ivory p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-soft motion-reduce:hover:translate-y-0">
              <div className="mb-8 grid size-12 place-items-center rounded-2xl bg-sage/40 text-sm font-semibold text-charcoal">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="font-serif text-3xl text-charcoal">{area.title}</h3>
              <p className="mt-4 max-w-xl text-base leading-7 text-warm-gray">{area.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
