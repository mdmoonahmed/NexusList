const testimonials = [
  { name: "Alex Rivera", role: "Collector", text: "NexusList completely changed how I track my vintage tech collection." },
  { name: "Sarah Chen", role: "Inventory Manager", text: "The UI is so clean. It's the first tool my team actually enjoys using." }
];

export function Testimonials() {
  return (
    <section className="section-container rounded-3xl my-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Trusted by Enthusiasts</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
              <p className="text-gray-600 italic mb-4">&quot;{t.text}&quot;</p>
              <h4 className="font-bold">{t.name}</h4>
              <p className="text-sm text-blue-600">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}