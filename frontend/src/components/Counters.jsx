function Counters() {
  return (
    <section className="py-20">
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        <div className="bg-white/10 p-8 rounded-2xl text-center">
          <h2 className="text-5xl font-bold text-blue-400">10+</h2>
          <p>Projects</p>
        </div>

        <div className="bg-white/10 p-8 rounded-2xl text-center">
          <h2 className="text-5xl font-bold text-purple-400">2+</h2>
          <p>Years Experience</p>
        </div>

        <div className="bg-white/10 p-8 rounded-2xl text-center">
          <h2 className="text-5xl font-bold text-green-400">50+</h2>
          <p>Clients</p>
        </div>
      </div>
    </section>
  );
}

export default Counters;