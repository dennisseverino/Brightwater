import { teamMembers } from '../data/siteContent';

export default function Team() {
  return (
    <section id="team" className="section bg-warm-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="eyebrow">Meet the team</p>
            <h2 className="section-title">Four lawyers. One steady point of contact.</h2>
          </div>
          <p className="max-w-md text-base leading-7 text-warm-gray">
            You will work with people who understand that clear advice matters most when everything else feels uncertain.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <article key={member.name} className="rounded-[1.75rem] border border-charcoal/10 bg-ivory p-6">
              <img
                src={member.image}
                alt={`${member.name}, ${member.role} at Brightwater Family Law`}
                className="mb-6 aspect-[4/5] w-full rounded-3xl object-cover"
                loading="lazy"
              />
              <h3 className="font-serif text-2xl text-charcoal">{member.name}</h3>
              <p className="mt-1 text-sm font-semibold text-teal">{member.role}</p>
              <p className="mt-4 text-sm leading-6 text-warm-gray">{member.detail}</p>
              {index === 0 ? <p className="mt-5 rounded-full bg-sage/35 px-4 py-2 text-xs font-semibold text-charcoal">Principal solicitor</p> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
