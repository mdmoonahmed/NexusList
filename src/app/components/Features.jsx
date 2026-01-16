export default function Features() {
  const features = [
    { title: "Fast Performance", desc: "Built with Next.js 15 for instant loading." },
    { title: "Real-time Data", desc: "Connected to a dedicated Express API." },
    { title: "Secure Access", desc: "Protected routes for managing your inventory." }
  ];

  return (
    <section className="section-container bg-gray-50 rounded-3xl my-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Why Choose NexusList?</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div key={i} className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}