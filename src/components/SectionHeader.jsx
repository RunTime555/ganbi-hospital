const alignClasses = {
  left: 'text-left',
  center: 'text-center mx-auto max-w-3xl',
  right: 'text-right ml-auto',
};

const SectionHeader = ({ eyebrow, title, subtitle, align = 'left' }) => (
  <div className={`mb-8 ${alignClasses[align] ?? alignClasses.left}`}>
    {eyebrow && (
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-dark">{eyebrow}</p>
    )}
    <h2 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl">{title}</h2>
    {subtitle && <p className="mt-3 text-base text-slate-600">{subtitle}</p>}
  </div>
);

export default SectionHeader;

