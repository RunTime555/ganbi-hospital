import AppointmentForm from '../components/AppointmentForm.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { visitingHours, emergencyInfo } from '../data/siteContent.js';

const Appointment = () => (
  <div className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6">
    <SectionHeader
      eyebrow="Appointments"
      title="Plan your visit"
      subtitle="Submit your request and our patient access team will confirm within 30 minutes."
      align="center"
    />
    <div className="grid gap-10 lg:grid-cols-2">
      <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-soft">
        <h3 className="text-xl font-semibold text-slate-900">What to prepare</h3>
        <ul className="mt-4 space-y-3 text-sm text-slate-600">
          <li>• National ID or passport</li>
          <li>• Insurance card or authorization letter</li>
          <li>• Previous diagnostics or medication list</li>
          <li>• Referral letters when applicable</li>
        </ul>
        <div className="mt-6">
          <h4 className="text-lg font-semibold text-slate-900">Visiting hours</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {visitingHours.map((slot) => (
              <li key={slot.label} className="flex justify-between">
                <span>{slot.label}</span>
                <span className="font-medium text-slate-800">{slot.time}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 rounded-2xl bg-slate-100 p-4 text-sm text-slate-600">
          <p className="font-semibold text-slate-800">Emergency?</p>
          <p>{emergencyInfo.hotline}</p>
          <p>{emergencyInfo.address}</p>
        </div>
      </div>
      <AppointmentForm />
    </div>
  </div>
);

export default Appointment;

