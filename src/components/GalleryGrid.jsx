const GalleryGrid = ({ images }) => (
  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {images.map((item) => (
      <figure
        key={item.id || item.image}
        className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-soft ripple-card"
      >
        <img
          src={item.image}
          alt={item.caption}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
        />
        {item.caption && (
          <figcaption className="px-4 py-3 text-sm font-medium text-slate-600">
            {item.caption}
          </figcaption>
        )}
      </figure>
    ))}
  </div>
);

export default GalleryGrid;

