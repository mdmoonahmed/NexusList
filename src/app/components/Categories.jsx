export function Categories() {
  const cats = ["Electronics", "Home Decor", "Lifestyle", "Modern Art"];
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold">Browse Categories</h2>
            <p className="text-gray-500">Discover items by their classification</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {cats.map((cat) => (
            <div key={cat} className="group relative h-40 bg-blue-600 rounded-2xl overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-lg">{cat}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}