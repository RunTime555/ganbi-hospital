import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import AppointmentForm from '../components/AppointmentForm.jsx';
import TestimonialCard from '../components/TestimonialCard.jsx';
import FaqAccordion from '../components/FaqAccordion.jsx';
import GalleryGrid from '../components/GalleryGrid.jsx';
import * as FaIcons from 'react-icons/fa';
import { HiOutlineSparkles, HiOutlineUserGroup, HiOutlineCube } from 'react-icons/hi';
import { MdOutlineLocalPharmacy, MdOutlineSupportAgent, MdOutlineHome } from 'react-icons/md';
import {
  heroContent,
  mission,
  services,
  emergencyInfo,
  visitingHours,
  insurancePartners,
  facilities,
  testimonials,
  faqs,
  policySections,
  gallery,
} from '../data/siteContent.js';

const Home = () => (
  <div className="space-y-16">
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden px-4 sm:px-6">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hospital.jpg"
          alt="Gabi General Hospital in Bahir Dar, Amhara Region, Ethiopia"
          className="h-full w-full object-cover"
          onError={(e) => {
            // Fallback to Unsplash if local image fails
            e.target.src = 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1920&h=1080&fit=crop&auto=format';
          }}
        />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-teal-700/50 via-cyan-700/45 to-teal-800/55" />
      {/* Content */}
      <div className="relative z-20 mx-auto flex max-w-6xl items-center py-20">
        <div className="max-w-xl text-white">
          <p className="text-sm uppercase tracking-[0.3em] text-teal-100">
            Gabi General Hospital · Bahir Dar, Amhara Region, Ethiopia
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            {heroContent.title}
          </h1>
          <p className="mt-4 text-base text-slate-100">{heroContent.subtitle}</p>
          <div className="mt-6 flex flex-wrap gap-6">
            {heroContent.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-semibold">{stat.value}</p>
                <p className="text-sm text-slate-200">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/appointment"
              className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-teal-700 shadow-lg shadow-teal-900/30 transition hover:bg-teal-50"
            >
              Book appointment
            </Link>
            <Link
              to="/departments"
              className="rounded-full border-2 border-white/80 bg-white/10 backdrop-blur-sm px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/20 hover:border-white"
            >
              Explore departments
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="rounded-[32px] border border-slate-100 bg-white p-8 shadow-soft ripple-card">
          <SectionHeader
            eyebrow="Mission"
            title={mission.title}
            subtitle={mission.description}
          />
          <ul className="space-y-3 text-sm text-slate-600">
            {mission.points.map((point, idx) => {
              const icons = [HiOutlineSparkles, HiOutlineUserGroup, HiOutlineCube];
              const Icon = icons[idx] || HiOutlineSparkles;
              return (
                <li key={point} className="flex items-start gap-3">
                  <Icon className="mt-0.5 flex-shrink-0 text-lg text-brand-dark" />
                  <span>{point}</span>
                </li>
              );
            })}
          </ul>
          <div className="mt-6 flex flex-wrap gap-6">
            {mission.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-semibold text-slate-900">{stat.value}</p>
                <p className="text-xs uppercase tracking-wide text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[32px] border border-slate-100 bg-white p-8 shadow-soft ripple-card">
          <SectionHeader
            eyebrow="Highlights"
            title="Centers of excellence"
            subtitle="We invest heavily in outcomes, technology, and warmth. Here is what families love."
          />
          <div className="space-y-4 text-sm text-slate-600">
            <div className="flex items-start gap-3 rounded-2xl bg-brand-light/70 px-4 py-3">
              <MdOutlineHome className="mt-0.5 flex-shrink-0 text-lg text-brand-dark" />
              <div>
                <strong>Smart Recovery Suites</strong> · ambient lighting, digital nurse call, guest
                seating.
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-2xl bg-slate-100 px-4 py-3">
              <MdOutlineSupportAgent className="mt-0.5 flex-shrink-0 text-lg text-brand-dark" />
              <div>
                <strong>Rapid Care Navigators</strong> shepherd every admission, insurance update, and
                discharge.
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-2xl bg-slate-100 px-4 py-3">
              <MdOutlineLocalPharmacy className="mt-0.5 flex-shrink-0 text-lg text-brand-dark" />
              <div>
                <strong>Integrated Pharmacy</strong> stocks chemo, biologics, pediatric formulations,
                and home delivery.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-6xl px-4 sm:px-6">
      <SectionHeader
        eyebrow="Services"
        title="Full-spectrum hospital services"
        subtitle="Evidence-based care, multidisciplinary teams, and concierge-level hospitality."
        align="center"
      />
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Link
          to="/services"
          className="rounded-full bg-brand-dark px-8 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-slate-900"
        >
          See All Services
        </Link>
      </div>
    </section>

    <section className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[32px] border border-slate-100 bg-white p-8 shadow-soft ripple-card">
          <SectionHeader
            eyebrow="Emergency"
            title="Always-on emergency medicine"
            subtitle={emergencyInfo.response}
          />
          <div className="space-y-3 text-sm text-slate-600">
            <p>
              <strong>Hotline:</strong> {emergencyInfo.hotline}
            </p>
            <p>
              <strong>{emergencyInfo.traumaLevel}</strong>
            </p>
            <p>{emergencyInfo.address}</p>
          </div>
          <Link
            to="/contact"
            className="mt-6 inline-flex rounded-full border border-brand-dark px-6 py-2 text-sm font-semibold text-brand-dark"
          >
            Directions & parking
          </Link>
        </div>
        <div className="rounded-[32px] border border-slate-100 bg-white p-8 shadow-soft ripple-card">
          <SectionHeader eyebrow="Visiting hours" title="Stay connected" />
          <ul className="space-y-3 text-sm text-slate-600">
            {visitingHours.map((slot) => (
              <li key={slot.label} className="flex items-center justify-between rounded-2xl bg-slate-100 px-4 py-3">
                <span className="font-semibold text-slate-800">{slot.label}</span>
                <span>{slot.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <section className="bg-white py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Partners"
          title="Insurance we honor"
          subtitle="Corporate retainerships, regional plans, and premier international insurers."
          align="center"
        />
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-slate-500">
          {insurancePartners.map((partner) => {
            const IconComponent = FaIcons[partner.icon] || FaIcons.FaBuilding;
            return (
              <span
                key={partner.name}
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-100 bg-white px-4 py-2 shadow-soft"
              >
                {IconComponent && <IconComponent className="text-lg text-brand-dark" />}
                <span>
                  {partner.name} · {partner.tier}
                </span>
              </span>
            );
          })}
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-6xl px-4 sm:px-6">
      <SectionHeader
        eyebrow="Facilities"
        title="Designed for healing"
        subtitle="Rounded architecture, daylight, and biophilic spaces improve recovery times."
        align="center"
      />
      <div className="grid gap-6 md:grid-cols-2">
        {facilities.map((facility) => (
          <article
            key={facility.title}
            className="rounded-3xl border border-slate-100 bg-white p-6 shadow-soft ripple-card"
          >
            <img
              src={facility.image}
              alt={facility.title}
              className="h-48 w-full rounded-2xl object-cover"
            />
            <h3 className="mt-4 text-xl font-semibold text-slate-900">{facility.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{facility.description}</p>
          </article>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Link
          to="/facilities"
          className="rounded-full bg-brand-dark px-8 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-slate-900"
        >
          See All Facilities
        </Link>
      </div>
    </section>

    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Voices"
          title="Families speak for us"
          subtitle="Transparency, clinical excellence, and hospitality you can feel."
          align="center"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <TestimonialCard key={item.name} {...item} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            to="/testimonials"
            className="rounded-full bg-brand-dark px-8 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-slate-900"
          >
            See All Testimonials
          </Link>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-6xl rounded-[32px] border border-slate-100 bg-white px-4 py-12 shadow-soft sm:px-12">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <SectionHeader
            eyebrow="Appointments"
            title="Your health concierge awaits"
            subtitle="Submit a request and our navigators will confirm within 30 minutes during clinic hours."
          />
          <ul className="space-y-3 text-sm text-slate-600">
            <li>• Choose in-person, video, or home visit</li>
            <li>• Share referrals, insurance, or imaging upfront</li>
            <li>• Receive reminders and prep guidance instantly</li>
          </ul>
        </div>
        <AppointmentForm />
      </div>
    </section>

    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Gallery"
          title="A glimpse inside Gabi General Hospital"
          subtitle="Discover our healing spaces in Bahir Dar, from modern wards to family lounges and gardens."
          align="center"
        />
        <GalleryGrid images={gallery.slice(0, 6)} />
        <div className="mt-8 flex justify-center">
          <Link
            to="/gallery"
            className="rounded-full bg-brand-dark px-8 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-slate-900"
          >
            See More Gallery
          </Link>
        </div>
      </div>
    </section>

    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently asked questions"
          subtitle="Quick answers to how we work, how to book, and how to reach us."
          align="center"
        />
        <div className="mt-8">
          <FaqAccordion items={faqs.slice(0, 6)} />
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            to="/faq"
            className="rounded-full bg-brand-dark px-8 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-slate-900"
          >
            See More FAQs
          </Link>
        </div>
      </div>
    </section>

    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Terms & Policies"
          title="Patient-first policies"
          subtitle="Read how we protect your privacy, safety, and financial clarity."
          align="center"
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {policySections.slice(0, 6).map((section) => (
            <article
              key={section.title}
              className="rounded-3xl border border-slate-100 bg-white p-6 shadow-soft ripple-card"
            >
              <h3 className="text-lg font-semibold text-slate-900">{section.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {section.details.slice(0, 3).map((detail, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-brand-dark">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            to="/policies"
            className="rounded-full bg-brand-dark px-8 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-slate-900"
          >
            See More Terms & Policies
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default Home;

