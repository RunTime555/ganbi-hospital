import SectionHeader from '../components/SectionHeader.jsx';
import { mission, facilities, emergencyInfo } from '../data/siteContent.js';

const About = () => (
  <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6">
    <SectionHeader
      eyebrow="About us"
      title="Ganbi General Hospital"
      subtitle="A 400-bed quaternary hospital serving West Africa with evidence-based medicine, digital records, and a hospitality mindset."
    />
    <div className="grid gap-10 lg:grid-cols-2">
      <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-soft">
        <h3 className="text-xl font-semibold text-slate-900">Our story</h3>
        <p className="mt-4 text-sm text-slate-600">
          Established in 1994, Ganbi General pioneered the region’s first hybrid theatres and
          tele-intensive-care unit. Today, we offer 30+ specialties, 8 centers of excellence, and
          digital-first experiences from triage to discharge.
        </p>
        <ul className="mt-6 space-y-3 text-sm text-slate-600">
          <li>• Magnet-recognized nursing teams and simulation labs</li>
          <li>• Accredited fellowship programs and research collaborations</li>
          <li>• Solar-powered campus with LEED Gold-certified wings</li>
        </ul>
      </div>
      <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-soft">
        <h3 className="text-xl font-semibold text-slate-900">Mission & values</h3>
        <p className="mt-4 text-sm text-slate-600">{mission.description}</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {mission.stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-brand-light/60 p-4 text-center">
              <p className="text-2xl font-semibold text-brand-dark">{stat.value}</p>
              <p className="text-xs uppercase tracking-wide text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-soft">
      <h3 className="text-xl font-semibold text-slate-900">Facilities snapshot</h3>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {facilities.map((facility) => (
          <article key={facility.title}>
            <img
              src={facility.image}
              alt={facility.title}
              className="h-48 w-full rounded-2xl object-cover"
            />
            <h4 className="mt-3 text-lg font-semibold text-slate-900">{facility.title}</h4>
            <p className="text-sm text-slate-600">{facility.description}</p>
          </article>
        ))}
      </div>
    </div>
    <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-soft">
      <h3 className="text-xl font-semibold text-slate-900">Emergency readiness</h3>
      <p className="mt-4 text-sm text-slate-600">{emergencyInfo.response}</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl bg-slate-100 p-4 text-center">
          <p className="text-lg font-semibold text-slate-900">Trauma Level</p>
          <p className="text-sm text-slate-600">{emergencyInfo.traumaLevel}</p>
        </div>
        <div className="rounded-2xl bg-slate-100 p-4 text-center">
          <p className="text-lg font-semibold text-slate-900">Hotline</p>
          <p className="text-sm text-slate-600">{emergencyInfo.hotline}</p>
        </div>
        <div className="rounded-2xl bg-slate-100 p-4 text-center">
          <p className="text-lg font-semibold text-slate-900">Address</p>
          <p className="text-sm text-slate-600">{emergencyInfo.address}</p>
        </div>
      </div>
    </div>
  </div>
);

export default About;

