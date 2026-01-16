import Image from "next/image";
import Link from "next/link";

export default async function ItemDetails({ params }) {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/api/items/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <div className="p-20 text-center">Item not found</div>;
  }

  const item = await res.json();

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <Link
        href="/items"
        className="text-blue-600 hover:underline mb-8 inline-block"
      >
        ← Back to Catalog
      </Link>

      <div className="grid md:grid-cols-2 gap-12">
        <Image
          src={item.image}
          alt={item.name}
          width={800}
          height={600} 
          priority 
          className="w-full rounded-2xl shadow-lg object-cover"
        />
        <div>
          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-bold">
            {item.category}
          </span>
          <h1 className="text-4xl font-bold mt-4">{item.name}</h1>
          <p className="text-2xl font-semibold text-gray-700 mt-2">
            ${item.price}
          </p>
          <p className="text-gray-600 mt-6 leading-relaxed">
            {item.description}
          </p>

          <button className="mt-8 w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition">
            Add to Favorites
          </button>
        </div>
      </div>
    </div>
  );
}
