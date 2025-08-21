import cateringImg from "../assets/catering.JPG";
import restaurantImg from "../assets/restaurant.jpeg";
import venuesImg from "../assets/venues.jpeg";

export default function Home() {
  return (
    <section>
      {/* WHAT WE DO FIRST */}
      <div className="container max-w-screen-2xl mx-auto mt-12">
  <div className="rounded-3xl bg-cream shadow-xl border border-navy/10 p-10 md:p-14">
    <h2 className="font-display tracking-widerHeading leading-heading text-4xl md:text-5xl lg:text-6xl text-navy text-center">
      What We Do
    </h2>

    <div className="mt-10 grid gap-8 md:gap-12 md:grid-cols-3 text-navy/90">
      {/* Catering */}
      <div className="space-y-4 group">
        <a href="/catering" className="block text-2xl md:text-3xl font-semibold hover:underline">
          Catering
        </a>
        <p className="text-xl leading-relaxed">
          We provide full-service catering with a chef-curated menu featuring a
          wide variety of cuisines and custom dishes tailored to any event or taste.
        </p>
        <img
          src={cateringImg}
          alt="Chef plating dishes at a catered event"
          width="1200"
          height="900"
          loading="lazy"
          className="w-full aspect-[4/3] object-cover rounded-2xl border border-navy/10 shadow-md
                     transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>

      {/* Restaurant */}
      <div className="space-y-4 group">
        <a href="https://rollatinirestaurant.com/" target="_blank" rel="noopener" className="block text-2xl md:text-3xl font-semibold hover:underline">
          Restaurant
        </a>
        <p className="text-xl leading-relaxed">
          Our Italian restaurant is a cozy, welcoming spot where families and friends gather
          to enjoy pastas, classic comfort dishes, and the heartwarming flavors of Italy.
        </p>
        <img
          src={restaurantImg}
          alt="Table with Italian dishes and wine"
          width="1200"
          height="900"
          loading="lazy"
          className="w-full aspect-[4/3] object-cover rounded-2xl border border-navy/10 shadow-md
                     transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>

      {/* Venues */}
      <div className="space-y-4 group">
        <a href="/venues" className="block text-2xl md:text-3xl font-semibold hover:underline">
          Our Venues
        </a>
        <p className="text-xl leading-relaxed">
          Beautiful venues across the Treasure Coast and South Florida—perfect for weddings,
          celebrations, and events of all kinds, each with its own unique charm and style.
        </p>
        <img
          src={venuesImg}
          alt="Elegant wedding reception venue setup"
          width="1200"
          height="900"
          loading="lazy"
          className="w-full aspect-[4/3] object-cover rounded-2xl border border-navy/10 shadow-md
                     transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
    </div>

    <div className="mt-12 text-center">
      <a
        href="/contact"
        aria-label="Contact us"
        className="inline-block px-10 py-5 text-xl font-semibold text-cream bg-navy rounded-xl shadow hover:bg-navy/90 transition"
      >
        Contact Us
      </a>
    </div>
  </div>
</div>


      {/* HERO ROW AFTER */}
      <div className="container max-w-screen-xl mx-auto py-20 grid gap-10 md:grid-cols-2 items-center">
        {/* Text column */}
        <div className="flex flex-col justify-center space-y-6 max-w-xl w-full md:pr-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display leading-tight">
            What We Believe In
          </h1>
          <p className="text-2xl opacity-90 leading-relaxed">
            For over 20 years, we’ve curated exceptional catering and elevated events
            with sophistication, style, and impeccable taste. Trusted for our flawless
            execution and refined service, we turn every occasion into an unforgettable
            experience. From intimate gatherings to grand celebrations, our team works
            closely with you to craft an event that reflects your vision, delights your
            guests, and leaves lasting memories. Every detail, from the first appetizer
            to the final toast, is handled with passion, precision, and a commitment to
            excellence.
          </p>
        </div>

        {/* Hero image */}
        <div className="relative flex justify-center">
          <img
            src="/images/hero.jpg"
            alt="Chef Victor Events"
            className="w-full max-w-lg md:max-w-xl rounded-3xl shadow-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}