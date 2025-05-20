export default function GalleryCard({ image, title, category, onClick }) {
  return (
    <div
      className="rounded-xl overflow-hidden shadow-md bg-gray-800 text-white cursor-pointer"
      onClick={onClick}
    >
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-2">
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="text-xs text-gray-400">
          {Array.isArray(category) ? category.join(", ") : category}
        </p>
      </div>
    </div>
  );
}
