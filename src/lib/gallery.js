// src/lib/gallery.js
// Auto-discovers images under src/assets/gallery/**

const ALL = import.meta.glob('/src/assets/gallery/**/*.{jpg,jpeg,png,webp}', { eager: true });

export const TITLES = {
  weddings: 'Weddings',
  quinceaneras: 'Quinceañeras',
  'special-events': 'Special Events',
  'chefs-selections': "Chef's Selections",
};

function sortByFilename([a], [b]) {
  const an = a.split('/').pop().toLowerCase();
  const bn = b.split('/').pop().toLowerCase();
  return an.localeCompare(bn, undefined, { numeric: true });
}

export function getAlbumImages(slug) {
  // everything in the album folder except a file named cover.*
  return Object.entries(ALL)
    .filter(([path]) => path.includes(`/gallery/${slug}/`) && !/\/cover\.(jpe?g|png|webp)$/i.test(path))
    .sort(sortByFilename)
    .map(([, mod]) => mod.default); // Vite gives URL at mod.default
}

export function getAlbumCover(slug) {
  const entry = Object.entries(ALL)
    .find(([path]) => path.includes(`/gallery/${slug}/`) && /\/cover\.(jpe?g|png|webp)$/i.test(path));
  return entry ? entry[1].default : null;
}

export const ALBUM_SLUGS = Object.keys(TITLES);