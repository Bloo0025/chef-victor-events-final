import Slideshow from '../components/Slideshow'

export default function Gallery() {
  return (
    <section className="container-xl py-12 space-y-8">
      <h2 className="text-3xl md:text-4xl font-display text-center">Gallery</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <Slideshow images={["/images/gallery/a1.jpg","/images/gallery/a2.jpg","/images/gallery/a3.jpg"]} className="aspect-square" />
        <Slideshow images={["/images/gallery/b1.jpg","/images/gallery/b2.jpg","/images/gallery/b3.jpg"]} className="aspect-square" />
        <Slideshow images={["/images/gallery/c1.jpg","/images/gallery/c2.jpg","/images/gallery/c3.jpg"]} className="aspect-square" />
      </div>
    </section>
  )
}
