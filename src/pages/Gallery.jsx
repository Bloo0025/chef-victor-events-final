// src/pages/Gallery.jsx
import { Link } from 'react-router-dom';
import { ALBUM_SLUGS, TITLES, getAlbumCover } from '../lib/gallery';

export default function Gallery() {
  return (
    <section className="container-xl py-12 space-y-10">
      <header className="text-center max-w-3xl mx-auto space-y-8">
        <h2 className="text-6xl md:text-7xl font-display text-[#263B50]">Gallery</h2>
        <p className="opacity-80 text-lg md:text-xl">Browse by album</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {ALBUM_SLUGS.map((slug, i) => {
          const cover = getAlbumCover(slug);
          return (
            <Link
              key={slug}
              to={`/gallery/${slug}`}
              className="group block rounded-2xl overflow-hidden bg-cream shadow hover:shadow-lg transition-shadow animate-fadeInUp"
              style={{ animationDelay: `${i * 80}ms` }}
              aria-label={`Open ${TITLES[slug]} album`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                {cover ? (
                  <img
                    src={cover}
                    alt={`${TITLES[slug]} cover`}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform"
                    loading="lazy"
                  />
                ) : (
                  <div className="h-full w-full grid place-items-center text-sm opacity-70">
                    No cover image
                  </div>
                )}
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold group-hover:text-navy transition-colors">
                  {TITLES[slug]}
                </h3>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}