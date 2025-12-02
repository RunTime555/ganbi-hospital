import SectionHeader from '../components/SectionHeader.jsx';
import FaqAccordion from '../components/FaqAccordion.jsx';
import { faqs } from '../data/siteContent.js';

const Faq = () => (
  <div className="mx-auto max-w-4xl space-y-10 px-4 sm:px-6">
    <SectionHeader
      eyebrow="FAQ"
      title="Frequently asked questions"
      subtitle="Need anything else? Call our concierge desk on +233 302 400 900."
      align="center"
    />
    <FaqAccordion items={faqs} />
  </div>
);

export default Faq;

