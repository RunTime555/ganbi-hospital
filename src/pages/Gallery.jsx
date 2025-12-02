import SectionHeader from '../components/SectionHeader.jsx';
import GalleryGrid from '../components/GalleryGrid.jsx';
import { gallery } from '../data/siteContent.js';

const Gallery = () => (
  <div className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6">
    <SectionHeader
      eyebrow="Gallery"
      title="Spaces that heal"
      subtitle="Take a photo tour of our diagnostic hubs, patient rooms, family lounges, and outdoor terraces."
      align="center"
    />
    <GalleryGrid images={gallery} />
  </div>
);

export default Gallery;

