import SectionHeader from '../components/SectionHeader.jsx';
import TestimonialCard from '../components/TestimonialCard.jsx';
import { testimonials } from '../data/siteContent.js';

const Testimonials = () => (
  <div className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6">
    <SectionHeader
      eyebrow="Testimonials"
      title="Stories of hope and healing"
      subtitle="Families rate us 4.9/5 for communication, comfort, and clinical outcomes."
      align="center"
    />
    <div className="grid gap-6 md:grid-cols-3">
      {testimonials.map((item) => (
        <TestimonialCard key={item.name} {...item} />
      ))}
    </div>
  </div>
);

export default Testimonials;

