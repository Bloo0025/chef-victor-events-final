// src/pages/GalleryAlbum.jsx
import { useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { TITLES, getAlbumImages } from '../lib/gallery';

export default function GalleryAlbum() {
  const { album } = useParams();
  const title = TITLES[album];
  const images = useMemo(() => getAlbumImages(album), [album]);

  // Lightbox state
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Keyboard controls when lightbox is open
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % images.length);
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, images.length]);

  if (!title) {
    return (
      <section className="container-xl py-12 space-y-8 text-center">
        <h2 className="text-3xl md:text-4xl">Album not found</h2>
        <Link className="text-navy underline" to="/gallery">Back to Gallery</Link>
      </section>
    );
  }

  return (
    <section className="container-xl py-12 space-y-10">
      <header className="text-center max-w-3xl mx-auto space-y-8">
        <h2 className="text-6xl md:text-7xl font-display text-[#263B50]">{title}</h2>
        <p className="opacity-80 text-lg md:text-xl">Tap any photo to view larger</p>
        <div>
          <Link to="/gallery" className="inline-block px-5 py-2 rounded-xl bg-cream text-navy hover:opacity-90 transition">
            ← Back to albums
          </Link>
        </div>
      </header>

      {/* Image grid with staggered fade-in */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => { setIndex(i); setOpen(true); }}
            className="block rounded-2xl overflow-hidden bg-cream shadow hover:shadow-lg transition-shadow animate-fadeInUp"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={src}
                alt={`${title} ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform"
                loading="lazy"
              />
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {open && images.length > 0 && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setOpen(false)}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[index]}
              alt={`${title} ${index + 1}`}
              className="w-full h-auto rounded-2xl shadow-lg animate-fadeInUp"
            />

            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 bg-black/60 text-white rounded-full px-3 py-1.5 hover:bg-black"
              aria-label="Close"
            >
              ✕
            </button>

            {images.length > 1 && (
              <>
                <button
                  onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full px-3 py-2 hover:bg-black"
                  aria-label="Previous"
                >
                  ‹
                </button>
                <button
                  onClick={() => setIndex((i) => (i + 1) % images.length)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full px-3 py-2 hover:bg-black"
                  aria-label="Next"
                >
                  ›
                </button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white/90 text-sm bg-black/40 px-3 py-1 rounded-full">
                  {index + 1} / {images.length}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}