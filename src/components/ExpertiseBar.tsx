export default function ExpertiseBar() {
  const expertise = ['FHIR', 'ONC Compliance', 'Da Vinci Workgroups', 'HIE Architecture', 'AI Governance'];

  return (
    <section className="bg-white py-12 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {expertise.map((item, index) => (
            <div
              key={item}
              className="flex items-center text-slate-600 font-medium text-sm md:text-base tracking-wide"
            >
              <span>{item}</span>
              {index < expertise.length - 1 && (
                <span className="ml-6 md:ml-12 text-slate-300">|</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
