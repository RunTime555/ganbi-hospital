import SectionHeader from '../components/SectionHeader.jsx';
import { facilities } from '../data/siteContent.js';

const Facilities = () => (
  <div className="mx-auto max-w-6xl space-y-10 px-4 py-10 sm:px-6">
    <SectionHeader
      eyebrow="Facilities"
      title="Spaces designed for healing and comfort"
      subtitle="Explore our operating theatres, inpatient rooms, healing gardens, and diagnostic hubs."
      align="center"
    />
    <div className="grid gap-6 md:grid-cols-2">
      {facilities.map((facility) => (
        <article
          key={facility.title}
          className="ripple-card rounded-3xl border border-slate-100 bg-white p-6 shadow-soft"
        >
          <img
            src={facility.image}
            alt={facility.title}
            className="h-56 w-full rounded-2xl object-cover"
          />
          <h3 className="mt-4 text-xl font-semibold text-slate-900">{facility.title}</h3>
          <p className="mt-2 text-sm text-slate-600">{facility.description}</p>
        </article>
      ))}
    </div>
  </div>
);

export default Facilities;


