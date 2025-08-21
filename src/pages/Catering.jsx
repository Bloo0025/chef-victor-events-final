import Slideshow from '../components/Slideshow'

export default function Catering() {
  return (
    <section className="container-xl py-12 space-y-10">
     <header className="text-center max-w-3xl mx-auto space-y-8">
  <h2 className="text-6xl md:text-7xl font-display text-[#263B50]">
    Catering
  </h2>
  <p className="opacity-80 text-lg md:text-xl">
    All Inlclusive | Bar Services | Food Stations | Hors d'oeuvres | Catering Trays | Design your own Package
  </p>
</header>
      <div className="grid md:grid-cols-3 gap-6 items-stretch">
        <div className="card">
          <h3 className="text-xl font-semibold">Wedding Celebrations</h3>
          <p className="opacity-80 card-body">Custom menus, elegant plated dinners, or relaxed buffet-style service—seamless and memorable.</p>
          <Slideshow images={["/images/weddings/WeddingSlide1.jpg","/images/weddings/WeddingSlide2.jpg","/images/weddings/WeddingSlide3.jpg"]} className="aspect-[4/3]" label="Weddings slideshow" />
        </div>
        <div className="card">
          <h3 className="text-xl font-semibold">Corporate Events</h3>
          <p className="opacity-80 card-body">Flexible options from refined plated meals to convenient buffet setups for meetings and conferences.</p>
          <Slideshow images={["/images/corporate/CorporateSlide1.jpg","/images/corporate/CorporateSlide2.jpg","/images/corporate/CorporateSlide3.jpg"]} className="aspect-[4/3]" label="Corporate slideshow" />
        </div>
        <div className="card">
          <h3 className="text-xl font-semibold">Private Events</h3>
          <p className="opacity-80 card-body">From formal occasions to fun, casual parties—tailored to make your celebration special.</p>
          <Slideshow images={["/images/social/SocialSlide1.jpg","/images/social/SocialSlide2.jpg","/images/social/SocialSlide3.jpg"]} className="aspect-[4/3]" label="Social slideshow" />
        </div>
      </div>

      <div className="bg-navy text-cream rounded-3xl p-6 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h3 className="text-3xl font-semibold">Food Stations</h3>
          <p className="mt-2 text-xl opacity-90">If a buffet or plated style menu is not what you seek, consider our All-Inclusive Food Station Packages. Food stations are a unique way to offer various cuisines in a more interactive setting. Some of our most popular food station packages are:

Charcuterie Boards
Italian Charcuterie Display
Taco Station
Carving Station
Pasta Station
Pizza Station
Slider Station
Mini Dessert Station</p>
        </div>
        <Slideshow images={["/images/stations/TacoStation.jpeg","/images/stations/CharcStation.jpg","/images/stations/DessertStation.jpeg"]} className="aspect-[4/3]" label="Food stations slideshow" />
      </div>

      <div className="text-center space-y-3">
        <a href="#" className="inline-block px-6 py-3 bg-navy text-cream rounded-xl shadow hover:opacity-90" aria-label="View menu or order trays">
          View Menu / Order Trays
        </a>
       <p className="opacity-70 text-lg md:text-xl">We also do take-out and drop-off trays for your events.</p>
      </div>
    {/* Contact CTA Box */}
<div
  className="bg-[#263B50] text-[#F3EDE0] rounded-3xl p-8 text-center space-y-4 shadow-lg animate-fadeInUp"
>
  <h3 className="text-2xl md:text-3xl">
    Contact us to make your event special
  </h3>
  <p className="opacity-90">
    Whether it’s a wedding, corporate gathering, or social celebration, we’re here to make it unforgettable.
  </p>
  <a
    href="/contact"
    className="inline-block px-8 py-3 bg-[#F3EDE0] text-[#263B50] rounded-xl shadow hover:bg-[#e5d9c7] transition"
  >
    Contact Us
  </a>
</div>
    </section>
  )
}
