function Features() {
  const items = [
    {
      title: "Actionable Insights",
      desc: "We summarize key trends and recommended next steps so you can move faster.",
    },
    {
      title: "Easy Integrations",
      desc: "Connect with your data sources in minutes—no complex ETL required.",
    },
    {
      title: "Lightweight & Secure",
      desc: "Designed to be fast and respectful of your privacy and budget.",
    },
  ];

  return (
    <section id="features" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="sm:text-center">
          <h2 className="text-lg font-semibold text-amber-600">Why Alunyte</h2>
          <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">Smarter decisions, without the noise</p>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">A focused set of features that help small teams unlock value from the data they already have.</p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f, i) => (
            <div key={i} className="rounded-lg border border-gray-100 p-6">
              <div className="h-10 w-10 rounded-md bg-amber-50 flex items-center justify-center text-amber-600 font-semibold">{i + 1}</div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;