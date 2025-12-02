const DoctorCard = ({ name, role, department, expertise, image }) => (
  <article className="flex flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
    <img
      src={image}
      alt={name}
      className="h-52 w-full rounded-2xl object-cover"
    />
    <div className="mt-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-brand-dark">
        {department}
      </p>
      <h3 className="mt-1 text-xl font-semibold text-slate-900">{name}</h3>
      <p className="text-sm text-slate-500">{role}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {expertise.map((item) => (
          <span
            key={item}
            className="rounded-full bg-brand-light/70 px-3 py-1 text-xs font-medium text-brand-dark"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  </article>
);

export default DoctorCard;
