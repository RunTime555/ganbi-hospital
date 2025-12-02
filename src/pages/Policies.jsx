import SectionHeader from '../components/SectionHeader.jsx';
import { policySections } from '../data/siteContent.js';

const Policies = () => (
  <div className="mx-auto max-w-5xl space-y-10 px-4 sm:px-6">
    <SectionHeader
      eyebrow="Terms & Policies"
      title="Patient-first policies"
      subtitle="Reviewed annually by our ethics board, legal partners, and patient advisory council."
      align="center"
    />
    <div className="space-y-6">
      {policySections.map((section) => (
        <article
          key={section.title}
          className="rounded-3xl border border-slate-100 bg-white p-6 shadow-soft"
        >
          <h3 className="text-xl font-semibold text-slate-900">{section.title}</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
            {section.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </div>
);

export default Policies;

