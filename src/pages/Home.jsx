export default function Home() {
  return (
    <section>
      <div className="container-xl py-14 grid gap-8 md:grid-cols-2 items-center">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-display leading-tight">What We Believe In</h1>
          <p className="opacity-90">
            For over 20 years, we’ve curated exceptional catering and elevated events with sophistication, style, and impeccable taste.
            Trusted for our flawless execution and refined service, we turn every occasion into an unforgettable experience.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow aspect-[4/3] bg-navy/10">
          <img src="/images/hero.jpg" alt="Chef Victor Events" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  )
}
