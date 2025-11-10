export default function Section({ id, heading, subheading, children, gradient = "from-fuchsia-500/10 via-sky-400/10 to-violet-600/10" }) {
  return (
    <section id={id} className="relative py-20 sm:py-28">
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${gradient} opacity-60`} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white drop-shadow-[0_1px_0_rgba(0,0,0,0.2)]">{heading}</h2>
          {subheading && (
            <p className="mt-3 text-white/80 max-w-2xl">{subheading}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  )
}
