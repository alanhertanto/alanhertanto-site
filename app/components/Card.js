export default function Card({ title, desc }) {
    return (
      <div className="bg-gray-800 p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm">{desc}</p>
      </div>
    );
  }
  