const categories = ["All", "Music", "Books", "Games"];

export default function Filter({ activeFilter, onChange }) {
  return (
    <div className="flex gap-2 overflow-x-auto mb-2 pb-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-3 py-1 text-sm rounded-full whitespace-nowrap ${
            activeFilter === cat
              ? "bg-yellow-400 text-black"
              : "bg-gray-700 text-white"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
