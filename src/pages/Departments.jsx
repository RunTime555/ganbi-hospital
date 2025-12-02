import SectionHeader from '../components/SectionHeader.jsx';
import DepartmentGrid from '../components/DepartmentGrid.jsx';
import { departments } from '../data/siteContent.js';

const Departments = () => (
  <div className="mx-auto max-w-6xl px-4 sm:px-6">
    <SectionHeader
      eyebrow="Departments"
      title="Centers of excellence"
      subtitle="Multidisciplinary teams share diagnostics, imaging, pharmacy, and rehab resources for seamless handoffs."
      align="center"
    />
    <DepartmentGrid departments={departments} />
  </div>
);

export default Departments;

