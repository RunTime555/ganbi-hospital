import { Link } from 'react-router-dom';
import { contactDetails, navLinks } from '../data/siteContent.js';

const Footer = () => (
  <footer className="bg-slate-900 text-slate-200">
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-6">
      <div>
        <div className="flex items-center gap-2 text-lg font-semibold text-white">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand px-2 text-white">
            GG
          </span>
          Ganbi General
        </div>
        <p className="mt-4 text-sm text-slate-300">
          A beacon of advanced medicine, hospitality, and community trust in the heart of Accra.
        </p>
      </div>
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-100">Quick links</h3>
        <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className="hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-100">Visit us</h3>
        <p className="mt-4 text-sm text-slate-300">{contactDetails.address}</p>
        <p className="mt-2 text-sm">Phone: {contactDetails.phone}</p>
        <p className="text-sm">WhatsApp: {contactDetails.whatsapp}</p>
        <p className="mt-2 text-sm">{contactDetails.email}</p>
      </div>
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-100">Hours</h3>
        <p className="mt-4 text-sm">Emergency · 24/7</p>
        <p className="text-sm">Outpatient Clinics · 6 AM – 10 PM</p>
        <p className="mt-4 text-sm text-slate-300">
          Follow {contactDetails.media} for live health chats, screening drives, and wellness events.
        </p>
      </div>
    </div>
    <div className="border-t border-slate-800 py-6 text-center text-xs text-slate-400">
      © {new Date().getFullYear()} Ganbi General Hospital. All rights reserved.
    </div>
  </footer>
);

export default Footer;

