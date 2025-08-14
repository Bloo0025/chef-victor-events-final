import Slideshow from '../components/Slideshow'

export default function Catering() {
  return (
    <section className="container-xl py-12 space-y-10">
      <header className="text-center max-w-3xl mx-auto space-y-2">
        <h2 className="text-3xl md:text-4xl font-display">Catering</h2>
        <p className="opacity-80">Weddings • Corporate • Social • Food Stations • Take‑out Trays</p>
      </header>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Weddings</h3>
          <p className="opacity-80">Custom menus, elegant plated dinners, or relaxed buffet‑style service—seamless and memorable.</p>
          <Slideshow images={["/images/weddings/1.jpg","/images/weddings/2.jpg","/images/weddings/3.jpg"]} className="aspect-[4/3]" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Corporate</h3>
          <p className="opacity-80">Flexible options from refined plated meals to convenient buffet setups for meetings and conferences.</p>
          <Slideshow images={["/images/corporate/1.jpg","/images/corporate/2.jpg","/images/corporate/3.jpg"]} className="aspect-[4/3]" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Social</h3>
          <p className="opacity-80">From formal occasions to fun, casual parties—tailored to make your celebration special.</p>
          <Slideshow images={["/images/social/1.jpg","/images/social/2.jpg","/images/social/3.jpg"]} className="aspect-[4/3]" />
        </div>
      </div>

      <div className="bg-navy text-cream rounded-3xl p-6 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h3 className="text-2xl font-semibold">Food Stations</h3>
          <p className="mt-2 opacity-90">A unique, interactive way to offer various cuisines. Popular stations include Charcuterie, Taco, Carving, Pasta, Pizza, Sliders, and Mini Desserts.</p>
        </div>
        <Slideshow images={["/images/stations/1.jpg","/images/stations/2.jpg","/images/stations/3.jpg"]} className="aspect-[4/3]" />
      </div>

      <div className="text-center space-y-3">
        <a href="#" className="inline-block px-6 py-3 bg-navy text-cream rounded-xl shadow hover:opacity-90">View Menu / Order Trays</a>
        <p className="opacity-70 text-sm">We also do take‑out and drop‑off trays for your events.</p>
      </div>
    </section>
  )
}
