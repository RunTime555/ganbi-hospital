import SectionHeader from '../components/SectionHeader.jsx';
import DoctorCard from '../components/DoctorCard.jsx';
import { doctors } from '../data/siteContent.js';

const Doctors = () => (
  <div className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6">
    <SectionHeader
      eyebrow="Doctors"
      title="Meet our lead specialists"
      subtitle="Fellowship-trained consultants supported by advanced practice nurses, pharmacists, and therapists."
      align="center"
    />
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.name} {...doctor} />
      ))}
    </div>
  </div>
);

export default Doctors;

