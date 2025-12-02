const DepartmentGrid = ({ departments }) => (
  <div className="grid gap-6 md:grid-cols-2">
    {departments.map((dept) => (
      <article
        key={dept.name}
        className="rounded-3xl border border-slate-100 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-xl"
      >
        <img
          src={dept.image}
          alt={dept.name}
          className="h-48 w-full rounded-2xl object-cover"
        />
        <h3 className="mt-4 text-xl font-semibold text-slate-900">{dept.name}</h3>
        <p className="mt-2 text-sm text-slate-600">{dept.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-brand-dark">
          {dept.focus.map((item) => (
            <span key={item} className="rounded-full bg-brand-light px-3 py-1">
              {item}
            </span>
          ))}
        </div>
      </article>
    ))}
  </div>
);

export default DepartmentGrid;

