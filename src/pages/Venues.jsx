import Slideshow from '../components/Slideshow'

export default function Venues() {
  return (
    <section className="container-xl py-12 space-y-10">
      <header className="text-center max-w-3xl mx-auto space-y-8">
        <h2 className="text-6xl md:text-7xl font-display text-[#263B50]">
          Venues
        </h2>
        <p className="opacity-80 text-lg md:text-xl">
          Elegant settings for weddings, corporate events, and special celebrations
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        <div className="card">
          <h3 className="text-xl font-semibold">
            <a
              href="https://www.promenadeontheriverllc.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-navy transition-colors"
            >
              Promenade on the River
            </a>
          </h3>
          <p className="opacity-80 card-body">
            Located in Port St. Lucie. Two floors with a luxurious riverfront setting for grand events.
          </p>
          <Slideshow
            images={[
              "/images/venues/promenade/Prom1.jpeg",
              "/images/venues/promenade/Prom2.JPG",
              "/images/venues/promenade/Prom3.JPG"
            ]}
            className="aspect-[4/3]"
            label="Promenade on the River slideshow"
          />
        </div>

        <div className="card">
          <h3 className="text-xl font-semibold">
            <a
              href="https://www.theclubatemeraldhills.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-navy transition-colors"
            >
              The Club at Emerald Hills
            </a>
          </h3>
          <p className="opacity-80 card-body">
            In the heart of Hollywood, FL—an intimate setting with beautiful views of the golf course.
          </p>
          <Slideshow
            images={[
              "/images/venues/emerald/Emerald1.jpg",
              "/images/venues/emerald/Emerald2.jpg",
              "/images/venues/emerald/Emerald3.jpg"
            ]}
            className="aspect-[4/3]"
            label="Emerald Hills slideshow"
          />
        </div>
      </div>
    </section>
  )
}
