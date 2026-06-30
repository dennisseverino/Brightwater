import { approachPoints } from '../data/siteContent';

export default function Approach() {
  return (
    <section id="approach" className="section bg-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <p className="eyebrow">Why Brightwater</p>
          <h2 className="section-title">A calmer way to move through a legal process.</h2>
          <p className="section-copy">
            Family law is personal. Our role is to reduce uncertainty, explain your options clearly, and help you make decisions with enough information and enough breathing room.
          </p>
          <a href="#consultation" className="mt-8 inline-flex rounded-full bg-teal px-6 py-4 text-sm font-semibold text-white shadow-soft transition hover:bg-charcoal focus-ring">
            Start with a free consultation
          </a>
        </div>
        <div className="grid gap-4">
          {approachPoints.map((point) => (
            <article key={point.title} className="rounded-[1.75rem] border border-charcoal/10 bg-white/75 p-7">
              <h3 className="font-serif text-3xl text-charcoal">{point.title}</h3>
              <p className="mt-3 text-base leading-7 text-warm-gray">{point.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
