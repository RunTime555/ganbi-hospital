const AppointmentForm = () => (
  <form className="space-y-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-soft">
    <div className="grid gap-4 md:grid-cols-2">
      <label className="text-sm font-medium text-slate-700">
        Full name
        <input
          type="text"
          placeholder="Jane Mensah"
          className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-brand-dark"
        />
      </label>
      <label className="text-sm font-medium text-slate-700">
        Phone number
        <input
          type="tel"
          placeholder="+233 24 000 0000"
          className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-brand-dark"
        />
      </label>
    </div>
    <div className="grid gap-4 md:grid-cols-2">
      <label className="text-sm font-medium text-slate-700">
        Email address
        <input
          type="email"
          placeholder="you@email.com"
          className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-brand-dark"
        />
      </label>
      <label className="text-sm font-medium text-slate-700">
        Preferred department
        <select className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-brand-dark">
          <option>Cardiology</option>
          <option>Emergency</option>
          <option>Oncology</option>
          <option>Women & Children</option>
          <option>Orthopedics</option>
        </select>
      </label>
    </div>
    <div className="grid gap-4 md:grid-cols-2">
      <label className="text-sm font-medium text-slate-700">
        Appointment date
        <input
          type="date"
          className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-brand-dark"
        />
      </label>
      <label className="text-sm font-medium text-slate-700">
        Preferred time
        <input
          type="time"
          className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-brand-dark"
        />
      </label>
    </div>
    <label className="text-sm font-medium text-slate-700">
      Notes for our care team
      <textarea
        rows="4"
        placeholder="Share symptoms, referrals, or medical history."
        className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-brand-dark"
      />
    </label>
    <button
      type="button"
      className="w-full rounded-full bg-brand-dark px-4 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-brand"
    >
      Submit request
    </button>
  </form>
);

export default AppointmentForm;

