import SectionHeader from '../components/SectionHeader.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import { services } from '../data/siteContent.js';

const Services = () => (
  <div className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6">
    <SectionHeader
      eyebrow="Services"
      title="Comprehensive care pathways"
      subtitle="From preventive screenings to complex surgeries, every service is coordinated through a single navigator."
      align="center"
    />
    <div className="grid gap-6 md:grid-cols-2">
      {services.map((service) => (
        <ServiceCard key={service.title} {...service} />
      ))}
    </div>
    <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-soft">
      <h3 className="text-xl font-semibold text-slate-900">Supportive services</h3>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {[
          'Pharmacy home delivery & medical equipment rental',
          'Clinical nutrition, diabetes education, and lifestyle coaching',
          'Behavioral health, grief counselling, and mindfulness studio',
          'Virtual care hub with multilingual physicians across time zones',
        ].map((item) => (
          <div key={item} className="rounded-2xl bg-slate-100 px-4 py-3 text-sm text-slate-600">
            {item}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Services;

