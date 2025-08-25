import Slideshow from '../components/Slideshow'

export default function Venues() {
  return (
    <section className="py-12 space-y-16">
      {/* Page Title */}
      <div className="container max-w-screen-2xl mx-auto px-6">
        <header className="text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-6xl md:text-7xl font-display text-navy">Venues</h2>
          <p className="opacity-80 text-lg md:text-xl font-body">
            Elegant settings for weddings, corporate events, and special celebrations
          </p>
        </header>
      </div>

      {/* Venue Cards */}
      <div className="container max-w-screen-2xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Promenade on the River */}
          <div className="card text-center">
            <h3 className="text-2xl md:text-3xl font-heading text-navy font-extrabold mb-4">
              <a
                href="https://www.promenadeontheriverllc.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:opacity-90"
              >
                Promenade on the River
              </a>
            </h3>
            <p className="opacity-80 card-body font-body text-lg md:text-xl leading-relaxed">
              Located in Port St. Lucie. Two floors with a luxurious riverfront setting for grand events.
            </p>
            <Slideshow
              images={[
                "/images/venues/promenade/Prom1.jpeg",
                "/images/venues/promenade/Prom2.JPG",
                "/images/venues/promenade/Prom3.JPG",
              ]}
              className="aspect-[4/3]"
              label="Promenade on the River slideshow"
            />
          </div>

          {/* The Club at Emerald Hills */}
          <div className="card text-center">
            <h3 className="text-2xl md:text-3xl font-heading text-navy font-extrabold mb-4">
              <a
                href="https://www.theclubatemeraldhills.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:opacity-90"
              >
                The Club at Emerald Hills
              </a>
            </h3>
            <p className="opacity-80 card-body font-body text-lg md:text-xl leading-relaxed">
              In the heart of Hollywood, FL—an intimate setting with beautiful views of the golf course.
            </p>
            <Slideshow
              images={[
                "/images/venues/emerald/Emerald1.jpg",
                "/images/venues/emerald/Emerald2.jpg",
                "/images/venues/emerald/Emerald3.jpg",
              ]}
              className="aspect-[4/3]"
              label="Emerald Hills slideshow"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
