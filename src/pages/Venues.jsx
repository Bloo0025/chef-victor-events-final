import Slideshow from '../components/Slideshow'

export default function Venues() {
  return (
    <section className="container-xl py-12 space-y-10">
      <header className="max-w-3xl space-y-2">
        <h2 className="text-3xl md:text-4xl font-display">Our Venues</h2>
        <p className="opacity-80">A collection across the Treasure Coast & South Florida. (Madison Green removed by request.)</p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Promenade on the River</h3>
          <p className="opacity-80">Located in Port St. Lucie. Two floors with a luxurious riverfront setting for grand events.</p>
          <Slideshow images={["/images/venues/promenade/1.jpg","/images/venues/promenade/2.jpg","/images/venues/promenade/3.jpg"]} className="aspect-[4/3]" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Emerald Hills</h3>
          <p className="opacity-80">In the heart of Hollywood, FL—an intimate setting with beautiful views of the golf course.</p>
          <Slideshow images={["/images/venues/emerald/1.jpg","/images/venues/emerald/2.jpg","/images/venues/emerald/3.jpg"]} className="aspect-[4/3]" />
        </div>
      </div>
    </section>
  )
}
