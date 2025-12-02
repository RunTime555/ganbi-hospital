import {
  heroImage,
  serviceImages,
  doctorImages,
  facilityImages,
  galleryImages as galleryPhotos,
} from '../assets/images/index.js';

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Departments', path: '/departments' },
  { label: 'Services', path: '/services' },
  { label: 'Doctors', path: '/doctors' },
  { label: 'Contact', path: '/contact' },
  { label: 'Sign In / Sign Up', path: '/auth' },
];

export const heroContent = {
  title: 'Compassionate care in Bahir Dar, Amhara Region, Ethiopia.',
  subtitle:
    'Gabi General Hospital in Bahir Dar delivers world-class diagnostics, emergency medicine, and specialist care for families across the Amhara Region and beyond.',
  stats: [
    { label: 'Daily patients', value: '1,200+' },
    { label: 'Specialists', value: '60+' },
    { label: 'Satisfaction', value: '98%' },
  ],
  image: heroImage,
};

export const mission = {
  title: 'Mission & Promise',
  description:
    'We blend evidence-based medicine with warm hospitality. Our multidisciplinary teams partner with patients, families, and insurers to design personalized care journeys.',
  points: [
    'Digitized records and bedside dashboards keep everyone aligned.',
    'Family-centered wards, private suites, and recovery lounges.',
    'Accredited simulation lab to keep every clinician emergency-ready.',
  ],
  stats: [
    { label: 'Centers of excellence', value: '8' },
    { label: 'Clinical pathways', value: '120+' },
    { label: 'Insurance partners', value: '40+' },
  ],
  image: facilityImages[0],
};

export const services = [
  {
    title: '24/7 Emergency & Trauma',
    description:
      'Dual helipads, critical care transport, and on-site trauma surgeons for ultra-fast response.',
    icon: 'HiOutlineTruck',
    image: serviceImages[0],
  },
  {
    title: 'Cardiac & Vascular Institute',
    description:
      'Hybrid cath labs, structural heart interventions, and cardiac rehab under one roof.',
    icon: 'HiOutlineHeart',
    image: serviceImages[1],
  },
  {
    title: 'Women & Children Center',
    description:
      'Family birthing suites, NICU, pediatric ICU, and adolescent clinics with child-life specialists.',
    icon: 'HiOutlineUserGroup',
    image: serviceImages[2],
  },
  {
    title: 'Diagnostics & Imaging',
    description:
      '3T MRI, PET-CT, molecular lab, and AI-enabled radiology reports delivered same day.',
    icon: 'HiOutlineBeaker',
    image: serviceImages[3],
  },
];

export const departments = [
  {
    name: 'Cardiology & Electrophysiology',
    summary:
      'Preventive cardiology, minimally invasive valve clinics, heart failure navigation, and advanced imaging.',
    focus: ['cTAVI suites', 'Heart rhythm center', 'Cardiac rehab gym'],
    image: facilityImages[1],
  },
  {
    name: 'Neurosciences',
    summary:
      'Comprehensive stroke program, spine minimally invasive surgery, neurology, and neuro ICU monitoring.',
    focus: ['Stroke response under 20 minutes', 'Epilepsy monitoring', 'Neuro-oncology board'],
    image: facilityImages[2],
  },
  {
    name: 'Oncology & Infusion',
    summary:
      'Integrated medical, surgical, and radiation oncology backed by genomic tumor boards and survivorship clinics.',
    focus: ['Infusion spa suites', 'Precision medicine lab', 'Clinical trials unit'],
    image: facilityImages[3],
  },
  {
    name: 'Orthopedics & Sports Medicine',
    summary:
      'Joint replacement, trauma reconstruction, pediatric ortho, and athlete performance programs.',
    focus: ['Robotic joint suites', 'Sports performance lab', 'Inpatient rehab'],
    image: facilityImages[4],
  },
];

export const doctors = [
  {
    name: 'Dr. Lydia Mensah',
    role: 'Chief Cardiologist',
    department: 'Cardiology',
    expertise: ['Advanced heart failure', 'Structural heart'],
    image: doctorImages[0],
  },
  {
    name: 'Dr. Daniel Okoye',
    role: 'Emergency Medicine Director',
    department: 'Emergency',
    expertise: ['Mass casualty', 'Critical care ultrasound'],
    image: doctorImages[1],
  },
  {
    name: 'Dr. Ama Boateng',
    role: 'Lead Obstetrician',
    department: 'Women & Children',
    expertise: ['High-risk pregnancies', 'Minimally invasive GYN'],
    image: doctorImages[2],
  },
  {
    name: 'Dr. Kofi Agyeman',
    role: 'Consultant Neurosurgeon',
    department: 'Neurosciences',
    expertise: ['Skull base surgery', 'Functional neurosurgery'],
    image: doctorImages[3],
  },
  {
    name: 'Dr. Serena Duarte',
    role: 'Oncology Pharmacist',
    department: 'Oncology',
    expertise: ['Immunotherapy', 'Symptom management'],
    image: doctorImages[4],
  },
  {
    name: 'Dr. Henry Lawson',
    role: 'Orthopedic Surgeon',
    department: 'Orthopedics',
    expertise: ['Robotic joint replacement', 'Sports trauma'],
    image: doctorImages[5],
  },
];

export const gallery = galleryPhotos.map((image, index) => ({
  id: index + 1,
  image,
  caption: [
    'Healing gardens',
    'Smart wards',
    'Imaging lounges',
    'Surgical hub',
    'Family atrium',
    'ICU pods',
    'Rehab studio',
    'Clinical lab',
    'Emergency department',
    'Pediatric ward',
    'Maternity suites',
    'Outpatient clinic',
  ][index % 12],
}));

export const testimonials = [
  {
    name: 'Mulu Gebremariam',
    relation: 'Cardiology patient · Bahir Dar',
    quote:
      'Every nurse, therapist, and cardiologist knew my name and plan. From triage to discharge, I felt seen, safe, and truly cared for.',
    rating: 5,
  },
  {
    name: 'Abebe Bekele',
    relation: 'Parent in NICU · Gondar',
    quote:
      'We stayed in the NICU for weeks and the staff became family. Daily updates in Amharic, quiet family spaces, and prayer-friendly areas reduced so much anxiety.',
    rating: 5,
  },
  {
    name: 'Sara Tadesse',
    relation: 'Orthopedic surgery patient · Addis Ababa',
    quote:
      'Rehab started the same day after surgery with clear exercises and encouragement. I went back home walking confidently and pain was well controlled.',
    rating: 5,
  },
];

export const faqs = [
  {
    question: 'Do you accept international insurance or regional health plans?',
    answer:
      'Yes. Gabi General Hospital works with 40+ global and regional insurers including Ethiopian Insurance Corporation, Nib Insurance, Nyala Insurance, and corporate retainership agreements.',
  },
  {
    question: 'How do I book imaging or lab work without a physician visit?',
    answer:
      'Self-referrals are welcome. Share your physician order via our patient portal or walk into Diagnostics Concierge 7 days a week from 6 AM to 10 PM.',
  },
  {
    question: 'What safety measures are in place for emergencies?',
    answer:
      'We operate a Level 1 trauma center with negative-pressure suites, rapid isolation pods, and certified life support teams on-site round the clock.',
  },
  {
    question: 'Can families stay overnight with patients?',
    answer:
      'Yes. Family suites, sleeper sofas, and concierge lodging partnerships are available. Kindly coordinate with your nurse navigator.',
  },
  {
    question: 'What languages are spoken at the hospital?',
    answer:
      'Our staff speaks Amharic, English, Tigrinya, and Oromo. We also have translation services available for other languages upon request.',
  },
  {
    question: 'How do I access my medical records online?',
    answer:
      'After creating an account through our patient portal, you can view test results, appointment history, and medical records securely. Contact our IT support for assistance.',
  },
  {
    question: 'Are there parking facilities available?',
    answer:
      'Yes, we have secure parking available for patients and visitors. Valet parking is also available for emergency visits and disabled patients.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept cash, major credit cards, mobile banking (M-Pesa, M-Birr), bank transfers, and insurance direct billing. Payment plans are available for major procedures.',
  },
];

export const insurancePartners = [
  { name: 'Ethiopian Insurance Corporation', tier: 'National', icon: 'FaBuilding' },
  { name: 'Nib Insurance', tier: 'Gold', icon: 'FaStethoscope' },
  { name: 'Nyala Insurance', tier: 'Premium', icon: 'FaShieldAlt' },
  { name: 'Global Health Cover', tier: 'Elite', icon: 'FaGlobe' },
  { name: 'Corporate Partners', tier: 'Retainerships', icon: 'FaHandshake' },
];

export const facilities = [
  {
    title: 'Hybrid Operating Theatres',
    description:
      'Robotics-ready suites with intraoperative imaging for open and minimally invasive procedures.',
    image: facilityImages[0],
  },
  {
    title: 'Smart Inpatient Rooms',
    description:
      'Ambient lighting, remote monitoring dashboards, and companion couches in every room.',
    image: facilityImages[1],
  },
  {
    title: 'Healing Gardens',
    description:
      'Therapeutic outdoor terraces, hydro walls, and mindfulness courtyards for families.',
    image: facilityImages[2],
  },
  {
    title: 'Precision Diagnostics Lab',
    description:
      'Molecular diagnostics, genomic sequencing, and AI-driven reporting in under 12 hours.',
    image: facilityImages[3],
  },
];

export const visitingHours = [
  { label: 'General Wards', time: 'Mon – Sun · 8:00 AM – 8:00 PM' },
  { label: 'ICU & CCU', time: 'Daily · 10:00 AM – 12:00 PM & 6:00 PM – 7:00 PM' },
  { label: 'Maternity Suites', time: 'Daily · 9:00 AM – 9:00 PM' },
  { label: 'Pediatrics', time: 'Parents 24/7 · Guests 10:00 AM – 7:00 PM' },
];

export const emergencyInfo = {
  hotline: '(+233) 800-424-911',
  traumaLevel: 'Level 1 Trauma Center',
  response: 'Average ambulance dispatch under 6 minutes within Accra.',
  address: '15 Ring Road Central, Accra · Emergency drive-thru available.',
};

export const contactDetails = {
  phone: '+233 302 400 900',
  email: 'care@ganbihospital.com',
  address: '15 Ring Road Central, Accra, Ghana',
  whatsapp: '+233 55 400 0900',
  media: '@GanbiHospital',
};

export const policySections = [
  {
    title: 'Patient Privacy & Consent',
    details: [
      'Gabi General Hospital complies with Ethiopian Data Protection regulations and international medical privacy standards.',
      'All diagnostics, imaging, and operative consents are digital yet printable upon request.',
      'Visitors must display wristbands generated at reception to access patient areas.',
      'Medical records are stored securely and can only be accessed by authorized personnel.',
    ],
  },
  {
    title: 'Insurance & Billing',
    details: [
      'Transparent bundled pricing is shared before elective procedures.',
      'Emergency stabilization is provided first; financial counselling follows once the patient is safe.',
      'Co-payments can be made via mobile money, bank transfer, or in-person POS terminals.',
      'We offer payment plans for major procedures and work with insurance companies for direct billing.',
    ],
  },
  {
    title: 'Patient Rights & Responsibilities',
    details: [
      'Patients may request second opinions, review medical records, and select caregivers.',
      'Respectful conduct toward staff and fellow patients is mandatory within the facility.',
      'Infection control policies require masks in high-risk zones and proof of vaccination for select visits.',
      'Patients have the right to refuse treatment and must be informed of all treatment options.',
    ],
  },
  {
    title: 'Visiting Hours & Guidelines',
    details: [
      'General wards: Monday to Sunday, 8:00 AM to 8:00 PM.',
      'ICU and CCU: Limited visiting hours with prior approval from medical staff.',
      'Children under 12 must be accompanied by an adult and may have restricted access to certain areas.',
      'Visitors must follow hygiene protocols and respect patient privacy.',
    ],
  },
  {
    title: 'Complaints & Feedback',
    details: [
      'We welcome feedback through our patient portal, suggestion boxes, or direct contact with patient relations.',
      'All complaints are investigated within 48 hours and responses provided within 7 business days.',
      'Patients can escalate concerns to the hospital administration or regulatory bodies if needed.',
      'We continuously improve our services based on patient feedback and satisfaction surveys.',
    ],
  },
  {
    title: 'Research & Clinical Trials',
    details: [
      'Gabi General Hospital participates in ethical medical research and clinical trials.',
      'Patient participation in research is voluntary and requires informed consent.',
      'Research activities are approved by our ethics committee and follow international guidelines.',
      'Patients can opt out of research participation at any time without affecting their care.',
    ],
  },
];

