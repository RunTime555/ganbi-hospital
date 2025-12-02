import * as FaIcons from 'react-icons/fa';
import * as HiIcons from 'react-icons/hi';
import * as MdIcons from 'react-icons/md';
import * as IoIcons from 'react-icons/io5';

const ServiceCard = ({ title, description, icon, image }) => {
  // Dynamically get icon component from react-icons - prioritize modern outline icons
  const IconComponent =
    HiIcons[icon] || MdIcons[icon] || IoIcons[icon] || FaIcons[icon] || HiIcons.HiOutlineHospital;

  return (
    <article className="group ripple-card flex flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-soft transition">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-light text-brand-dark">
          {IconComponent && <IconComponent className="text-xl" />}
        </div>
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      </div>
      {image && (
        <img
          src={image}
          alt={title}
          className="mt-4 h-40 rounded-2xl object-cover transition-transform duration-300 group-hover:scale-[1.015]"
        />
      )}
      <p className="mt-4 text-sm text-slate-600">{description}</p>
    </article>
  );
};

export default ServiceCard;

