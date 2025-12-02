const TestimonialCard = ({ name, relation, quote, rating }) => (
  <article className="rounded-3xl border border-slate-100 bg-white p-6 shadow-soft">
    <div className="flex items-center gap-2 text-brand-dark">
      {Array.from({ length: rating }, (_, idx) => (
        <span key={`${name}-star-${idx}`}>★</span>
      ))}
    </div>
    <p className="mt-4 text-base text-slate-700 italic">“{quote}”</p>
    <div className="mt-6">
      <p className="text-base font-semibold text-slate-900">{name}</p>
      <p className="text-sm text-slate-500">{relation}</p>
    </div>
  </article>
);

export default TestimonialCard;

