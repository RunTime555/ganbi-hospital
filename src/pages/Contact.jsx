import SectionHeader from '../components/SectionHeader.jsx';
import AppointmentForm from '../components/AppointmentForm.jsx';
import { contactDetails, emergencyInfo } from '../data/siteContent.js';

const Contact = () => (
  <div className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6">
    <SectionHeader
      eyebrow="Contact"
      title="We are here for you"
      subtitle="Reach the concierge desk 24/7 or visit our campus along Ring Road Central."
      align="center"
    />
    <div className="grid gap-10 lg:grid-cols-2">
      <div className="space-y-6">
        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-soft">
          <h3 className="text-lg font-semibold text-slate-900">Call or message</h3>
          <p className="mt-3 text-sm text-slate-600">
            Phone: <span className="font-semibold">{contactDetails.phone}</span>
          </p>
          <p className="text-sm text-slate-600">
            WhatsApp: <span className="font-semibold">{contactDetails.whatsapp}</span>
          </p>
          <p className="text-sm text-slate-600">
            Email: <span className="font-semibold">{contactDetails.email}</span>
          </p>
        </div>
        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-soft">
          <h3 className="text-lg font-semibold text-slate-900">Visit us</h3>
          <p className="mt-3 text-sm text-slate-600">{contactDetails.address}</p>
          <p className="mt-2 text-sm text-slate-600">Emergency drive-thru & valet parking.</p>
          <div className="mt-4 h-64 w-full rounded-2xl bg-[url('https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png')] bg-cover bg-center" />
        </div>
        <div className="rounded-3xl border border-slate-100 bg-brand-light/80 p-6 shadow-soft">
          <h3 className="text-lg font-semibold text-slate-900">Emergency hotline</h3>
          <p className="mt-2 text-2xl font-semibold text-brand-dark">{emergencyInfo.hotline}</p>
          <p className="text-sm text-slate-600">{emergencyInfo.response}</p>
        </div>
      </div>
      <div>
        <AppointmentForm />
      </div>
    </div>
  </div>
);

export default Contact;

