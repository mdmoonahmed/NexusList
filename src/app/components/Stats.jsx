export default function Stats() {
  return (
    <section className="section-container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <div className="text-4xl font-bold text-blue-600">15+</div>
          <div className="text-gray-500">Premium Items</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-blue-600">100%</div>
          <div className="text-gray-500">Secure Auth</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-blue-600">24/7</div>
          <div className="text-gray-500">API Uptime</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-blue-600">0ms</div>
          <div className="text-gray-500">Server Lag</div>
        </div>
      </div>
    </section>
  );
}