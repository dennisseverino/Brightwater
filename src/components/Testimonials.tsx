import { testimonials } from '../data/siteContent';

export default function Testimonials() {
  return (
    <section className="section bg-ivory">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <p className="eyebrow">Client words</p>
          <h2 className="section-title">People remember how supported they felt.</h2>
        </div>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="rounded-[1.75rem] border border-charcoal/10 bg-white/75 p-7">
              <blockquote className="text-lg leading-8 text-charcoal">"{testimonial.quote}"</blockquote>
              <figcaption className="mt-6 text-sm font-semibold text-warm-gray">{testimonial.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
