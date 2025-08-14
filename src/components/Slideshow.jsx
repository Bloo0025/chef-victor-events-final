import { useEffect, useState } from 'react'

export default function Slideshow({ images = [], alt = 'gallery slide', className = '' }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!images.length) return
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), 2000)
    return () => clearInterval(id)
  }, [images.length])

  if (!images.length) return null

  return (
    <div className={`relative overflow-hidden rounded-2xl shadow ${className}`}>
      {images.map((src, i) => (
        <img
          key={src + i}
          src={src}
          alt={alt}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${i === index ? 'opacity-100' : 'opacity-0'}`}
          loading={i === index ? 'eager' : 'lazy'}
        />
      ))}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        {images.map((_, i) => (
          <span key={i} className={`h-1.5 w-4 rounded-full ${i === index ? 'bg-navy' : 'bg-navy/30'}`}></span>
        ))}
      </div>
    </div>
  )
}
