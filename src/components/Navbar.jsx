import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const linkBase =
  'px-3 py-2 rounded-xl hover:bg-cream/10 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cream/60'

export default function Navbar() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 bg-navy text-cream border-b border-navy/10 backdrop-blur-sm shadow">
      <div className="container-xl flex items-center justify-between py-3 md:py-6">
        {/* Brand */}
        <button
          onClick={() => { navigate('/'); closeMenu() }}
          className="flex items-center gap-3 text-2xl md:text-4xl font-display font-semibold tracking-wide"
          aria-label="Go to homepage"
        >
          <img
            src="/images/logo.png"
            alt="Chef Victor Events Logo"
            className="h-10 md:h-20 w-auto"
          />
          <span className="hidden sm:inline md:text-5xl">Chef Victor Events</span>
        </button>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden md:flex gap-1 text-sm md:text-base">
          <NavLink to="/" onClick={closeMenu}
            className={({isActive}) => `${linkBase} ${isActive ? 'bg-cream text-navy underline underline-offset-4 font-semibold' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/catering" onClick={closeMenu}
            className={({isActive}) => `${linkBase} ${isActive ? 'bg-cream text-navy underline underline-offset-4 font-semibold' : ''}`}>
            Catering
          </NavLink>
          <a href="https://rollatinirestaurant.com/" target="_blank" rel="noopener" className={linkBase}>
            Restaurant
          </a>
          <NavLink to="/venues" onClick={closeMenu}
            className={({isActive}) => `${linkBase} ${isActive ? 'bg-cream text-navy underline underline-offset-4 font-semibold' : ''}`}>
            Venues
          </NavLink>
          <NavLink to="/gallery" onClick={closeMenu}
            className={({isActive}) => `${linkBase} ${isActive ? 'bg-cream text-navy underline underline-offset-4 font-semibold' : ''}`}>
            Gallery
          </NavLink>
          <NavLink to="/contact" onClick={closeMenu}
            className={({isActive}) => `${linkBase} ${isActive ? 'bg-cream text-navy underline underline-offset-4 font-semibold' : ''}`}>
            Contact Us
          </NavLink>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-cream/60 hover:bg-cream/10"
          aria-label="Toggle menu"
          aria-expanded={open ? 'true' : 'false'}
          onClick={() => setOpen(v => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Mobile menu panel */}
<div
  className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
    open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
  }`}
>
  <nav aria-label="Mobile Primary" className="border-t border-navy/20 bg-navy/95">
    <div className="container-xl py-2 grid">
      <NavLink to="/" onClick={closeMenu} className={({isActive}) => `${linkBase} ${isActive ? 'bg-cream text-navy font-semibold' : ''}`}>Home</NavLink>
      <NavLink to="/catering" onClick={closeMenu} className={({isActive}) => `${linkBase} ${isActive ? 'bg-cream text-navy font-semibold' : ''}`}>Catering</NavLink>
      <a href="https://rollatinirestaurant.com/" target="_blank" rel="noopener" className={linkBase}>Restaurant</a>
      <NavLink to="/venues" onClick={closeMenu} className={({isActive}) => `${linkBase} ${isActive ? 'bg-cream text-navy font-semibold' : ''}`}>Venues</NavLink>
      <NavLink to="/gallery" onClick={closeMenu} className={({isActive}) => `${linkBase} ${isActive ? 'bg-cream text-navy font-semibold' : ''}`}>Gallery</NavLink>
      <NavLink to="/contact" onClick={closeMenu} className={({isActive}) => `${linkBase} ${isActive ? 'bg-cream text-navy font-semibold' : ''}`}>Contact</NavLink>
    </div>
  </nav>
</div>
    </header>
  )
}
