export default function Home() {
  return (
    <section>
      {/* HERO ROW */}
      <div className="container-xl pt-10 md:pt-14 pb-0 grid gap-6 md:gap-8 md:grid-cols-2 items-start relative z-10 min-h-screen">
        {/* Text column anchored in the upper half */}
        <div className="flex flex-col justify-start self-start space-y-6 max-w-xl w-full md:pr-6 mt-[10vh] md:mt-[12vh]">
          <h1 className="text-5xl md:text-6xl font-display leading-tight">
            What We Believe In
          </h1>
          <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
           For over 20 years, we’ve curated exceptional catering and elevated events with sophistication, style, and impeccable taste.
            Trusted for our flawless execution and refined service, we turn every occasion into an unforgettable experience.
            From intimate gatherings to grand celebrations, our team works closely with you to craft an event that reflects your vision, delights your guests, and leaves lasting memories.
            Every detail, from the first appetizer to the final toast, is handled with passion, precision, and a commitment to excellence.
          </p>
        </div>

        {/* Full-height hero image */}
        <div className="relative min-h-[70vh] md:min-h-screen">
          <img
            src="/images/hero.jpg"
            alt="Chef Victor Events"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* FULL-WIDTH "WHAT WE DO" SECTION WITH RESPONSIVE OVERLAP */}
      <div className="container-xl relative z-20 -mt-[13vh] md:-mt-[19vh] lg:-mt-[30vh]">
        <div className="rounded-3xl bg-cream shadow-xl border border-navy/10 p-8 md:p-12">
          <h2 className="text-4xl md:text-5xl font-display text-navy text-center">
            What We Do
          </h2>

          <div className="mt-8 grid gap-6 md:gap-8 md:grid-cols-3 text-navy/90">
            <div className="space-y-3">
              <h3 className="text-xl md:text-2xl font-semibold">Catering</h3>
              <p className="text-lg leading-relaxed">
                We provide full-service catering with a chef-curated menu featuring a wide variety of cuisines and custom dishes tailored to any event or taste.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl md:text-2xl font-semibold">Restaurant</h3>
              <p className="text-lg leading-relaxed">
                Our Italian restaurant is a cozy, welcoming spot where families and friends gather to enjoy pastas, classic comfort dishes, and the heartwarming flavors of Italy.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl md:text-2xl font-semibold">Our Venues</h3>
              <p className="text-lg leading-relaxed">
                We offer a collection of beautiful venues across the Treasure Coast and South Florida, perfect for weddings, celebrations, and events of all kinds—each with its own unique charm and style.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <a
              href="/contact"
              aria-label="Contact us"
              className="inline-block px-8 py-4 text-lg font-semibold text-cream bg-navy rounded-xl shadow hover:bg-navy/90 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
