import Image from "next/image";
import Link from "next/link";

export default async function ItemsPage() {
  const res = await fetch("http://localhost:5000/api/items", {
    cache: "no-store",
  });
  const items = await res.json();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Premium Collection</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <span className="text-xs font-bold text-blue-600 uppercase">
                {item.category}
              </span>
              <h3 className="text-xl font-bold mt-2">{item.name}</h3>
              <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                {item.description}
              </p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-bold">${item.price}</span>
                <Link
                  href={`/items/${item.id}`}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
