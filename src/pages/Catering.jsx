import Slideshow from '../components/Slideshow'
import FeatureBlock from '../components/FeatureBlock'

export default function Catering() {
  return (
    <section className="py-12 space-y-16">{/* was space-y-20 */}
      {/* Page Title */}
      <div className="container max-w-screen-2xl mx-auto px-6">
        <header className="text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-6xl md:text-7xl font-display text-navy">Catering</h2>

          {/* Mini-TOC nav (styled) */}
          <nav
            aria-label="Catering sections"
            className="opacity-90 text-base md:text-lg font-body flex flex-wrap justify-center items-center gap-y-2"
          >
            <a href="#all-inclusive" className="px-2 text-navy hover:underline focus:underline focus:outline-none">
              All Inclusive
            </a>
            <span className="text-navy/30">•</span>
            <a href="#bar-services" className="px-2 text-navy hover:underline focus:underline focus:outline-none">
              Bar Services
            </a>
            <span className="text-navy/30">•</span>
            <a href="#food-stations" className="px-2 text-navy hover:underline focus:underline focus:outline-none">
              Food Stations
            </a>
            <span className="text-navy/30">•</span>
            <a href="#horsdoeuvres" className="px-2 text-navy hover:underline focus:underline focus:outline-none">
              Hors d&apos;oeuvres
            </a>
            <span className="text-navy/30">•</span>
            <a href="#catering-trays" className="px-2 text-navy hover:underline focus:underline focus:outline-none">
              Catering Trays
            </a>
            <span className="text-navy/30">•</span>
            <a href="#custom-package" className="px-2 text-navy hover:underline focus:underline focus:outline-none">
              Design Your Own Package
            </a>
          </nav>
        </header>
      </div>

      {/* Main Event Types */}
      <div className="container max-w-screen-2xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          <div className="card">
            <h3 className="text-2xl md:text-4xl font-heading text-navy font-extrabold mb-4">
              Wedding Celebrations
            </h3>
            <p className="opacity-80 card-body font-body text-lg md:text-xl leading-relaxed">
              Custom menus, elegant plated dinners, or relaxed buffet-style service—seamless and memorable.
            </p>
            <Slideshow
              images={[
                "/images/weddings/WeddingSlide1.jpg",
                "/images/weddings/WeddingSlide2.jpg",
                "/images/weddings/WeddingSlide3.jpg",
              ]}
              className="aspect-[4/3]"
              label="Weddings slideshow"
            />
          </div>

          <div className="card">
            <h3 className="text-2xl md:text-4xl font-heading text-navy font-extrabold mb-4">
              Corporate Events
            </h3>
            <p className="opacity-80 card-body font-body text-lg md:text-xl leading-relaxed">
              Flexible options from refined plated meals to convenient buffet setups for meetings and conferences.
            </p>
            <Slideshow
              images={[
                "/images/corporate/CorporateSlide1.jpg",
                "/images/corporate/CorporateSlide2.jpg",
                "/images/corporate/CorporateSlide3.jpg",
              ]}
              className="aspect-[4/3]"
              label="Corporate slideshow"
            />
          </div>

          <div className="card">
            <h3 className="text-2xl md:text-4xl font-heading text-navy font-extrabold mb-4">
              Private Events
            </h3>
            <p className="opacity-80 card-body font-body text-lg md:text-xl leading-relaxed">
              From formal occasions to fun, casual parties. We tailor events to make your celebration special.
            </p>
            <Slideshow
              images={[
                "/images/social/SocialSlide1.jpg",
                "/images/social/SocialSlide2.jpg",
                "/images/social/SocialSlide3.jpg",
              ]}
              className="aspect-[4/3]"
              label="Social slideshow"
            />
          </div>
        </div>
      </div>

      {/* ===== Feature Blocks (alternating, compact, anchorable) ===== */}
      <FeatureBlock
        id="all-inclusive"
        title="All-Inclusive Packages"
        image="/images/packages/packages.jpg"
        compact
      >
        We offer four All-Inclusive Packages that include a complete menu, an open bar, table settings, servers, and bartenders.
        The packages vary in the quantity of hors d&apos;oeuvres and entrees. Clients may also add additional services to any
        selected package such as but not limited to dessert, wedding cake, floral décor, DJ, and rentals (linens, tables, chairs, etc).
        <br /><br />
        <strong>Note:</strong> All packages can be customized to align with your vision and expectations.
      </FeatureBlock>

      <FeatureBlock
        id="bar-services"
        title="Bar Services"
        image="/images/bar/bar.jpg"
        imageLeft
        compact
      >
        Our premier bar services bring the celebration to life. From classic cocktails to curated specialty drinks, our licensed
        bartenders provide efficient, professional service—complete with bar setup, mixers, and glassware options tailored to your event.
      </FeatureBlock>

      <FeatureBlock
        id="food-stations"
        title="Food Stations"
        image="/images/stations/CharcStation.jpg"
        compact
      >
        If a buffet or plated style menu is not what you seek, consider our All-Inclusive Food Station Packages. Food stations are a
        unique way to offer various cuisines in a more interactive setting. Some of our most popular food station packages are:
        <br /><br />
        Charcuterie Boards • Italian Charcuterie Display • Taco Station • Carving Station • Pasta Station • Pizza Station •
        Slider Station • Mini Dessert Station
      </FeatureBlock>

      <FeatureBlock
        id="horsdoeuvres"
        title="Hors d&apos;oeuvres"
        image="/images/horsdoeuvres/hors.jpg"
        imageLeft
        compact
      >
        Our All-Inclusive Hors d&apos;oeuvre Packages are perfect for cocktail parties or events with shorter timelines. These packages
        include Rollatini Catering servers and are designed to provide a two-hour passed hors d&apos;oeuvre service.
      </FeatureBlock>

      <FeatureBlock
        id="catering-trays"
        title="Catering Trays"
        image="/images/trays/trays.jpg"
        compact
      >
        This cost-effective option entails ordering trays of your favorite dishes from Rollatini Italian Restaurant. Once the order
        is placed, you have the option to pick up your order in person or have it delivered by our team.
      </FeatureBlock>

      <FeatureBlock
        id="custom-package"
        title="Design Your Own Package"
        image="/images/custom/custom.jpg"
        imageLeft
        compact
      >
        This option is provided to clients whose vision does not align with any of the catering options outlined above. Our team has
        professional event organizers ready to collaborate on new packages suited for all events.
      </FeatureBlock>

      {/* Contact CTA Box */}
      <div className="container max-w-screen-2xl mx-auto px-6">
        <div className="bg-navy text-cream rounded-3xl p-8 md:p-12 text-center space-y-6 shadow-lg animate-fadeInUp">
          <h3 className="text-2xl md:text-3xl font-heading font-extrabold">Contact us to make your event special</h3>
          <p className="opacity-90 font-body text-lg md:text-xl">
            Whether it’s a wedding, corporate gathering, or social celebration, we’re here to make it unforgettable.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-cream text-navy rounded-xl shadow hover:bg-[#e5d9c7] transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
