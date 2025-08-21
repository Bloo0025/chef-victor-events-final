import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import logo from '../assets/logo.png'; // <-- only the 1x logo

const linkBase =
  'px-3 py-2 rounded-xl hover:bg-cream/10 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cream/60';

export default function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-navy text-cream border-b border-navy/10 backdrop-blur-sm shadow">
      <div className="container max-w-screen-2xl mx-auto py-3 md:py-6">
        {/* 3-col: logo | mobile title | hamburger / desktop nav */}
        <div className="grid grid-cols-[auto,1fr,auto] items-center gap-3 md:gap-6">
          {/* Brand (logo + brand text on md+) */}
          <button
            onClick={() => { navigate('/'); closeMenu(); }}
            type="button"
            className="flex items-center gap-3 md:gap-4 font-display font-semibold tracking-wide shrink-0"
            aria-label="Go to homepage"
          >
            <img
              src={logo}
              alt="Chef Victor Events Logo"
              width="640"
              height="240"
              className="h-12 sm:h-14 md:h-24 lg:h-32 xl:h-40 w-auto object-contain shrink-0"
              loading="eager"
              fetchpriority="high"
              decoding="async"
            />
            {/* Show brand text next to logo on md+ */}
            <span className="hidden md:inline leading-none whitespace-nowrap text-2xl lg:text-4xl xl:text-5xl">
              Chef Victor Events
            </span>
          </button>

          {/* Centered mobile title */}
          <div className="justify-self-center md:hidden">
            <span className="font-display text-lg sm:text-xl leading-none">
              Chef Victor Events
            </span>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-cream/60 hover:bg-cream/10 justify-self-end"
            aria-label="Toggle menu"
            aria-expanded={open ? 'true' : 'false'}
            onClick={() => setOpen(v => !v)}
            type="button"
          >
            {open ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            )}
          </button>

          {/* Desktop nav */}
          <nav aria-label="Primary" className="hidden md:flex justify-end">
            <ul className="flex items-center gap-4 lg:gap-7 xl:gap-9 text-lg lg:text-xl xl:text-2xl font-semibold tracking-wide">
              <li>
                <NavLink to="/" onClick={closeMenu}
                  className={({isActive}) => `${linkBase} ${isActive ? 'bg-cream text-navy underline underline-offset-4 font-semibold' : ''}`}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/catering" onClick={closeMenu}
                  className={({isActive}) => `${linkBase} ${isActive ? 'bg-cream text-navy underline underline-offset-4 font-semibold' : ''}`}>
                  Catering
                </NavLink>
              </li>
              <li>
                <a href="https://rollatinirestaurant.com/" target="_blank" rel="noopener" className={linkBase}>
                  Restaurant
                </a>
              </li>
              <li>
                <NavLink to="/venues" onClick={closeMenu}
                  className={({isActive}) => `${linkBase} ${isActive ? 'bg-cream text-navy underline underline-offset-4 font-semibold' : ''}`}>
                  Venues
                </NavLink>
              </li>
              <li>
                <NavLink to="/gallery" onClick={closeMenu}
                  className={({isActive}) => `${linkBase} ${isActive ? 'bg-cream text-navy underline underline-offset-4 font-semibold' : ''}`}>
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={closeMenu}
                  className={({isActive}) => `${linkBase} ${isActive ? 'bg-cream text-navy underline underline-offset-4 font-semibold' : ''}`}>
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav aria-label="Mobile Primary" className="border-t border-navy/20 bg-navy/95">
            <div className="container mx-auto max-w-screen-2xl py-2 grid">
              <NavLink to="/" onClick={closeMenu} className={({isActive}) => `${linkBase} ${isActive ? 'bg-cream text-navy font-semibold' : ''}`}>Home</NavLink>
              <NavLink to="/catering" onClick={closeMenu} className={({isActive}) => `${linkBase} ${isActive ? 'bg-cream text-navy font-semibold' : ''}`}>Catering</NavLink>
              <a href="https://rollatinirestaurant.com/" target="_blank" rel="noopener" className={linkBase}>Restaurant</a>
              <NavLink to="/venues" onClick={closeMenu} className={({isActive}) => `${linkBase} ${isActive ? 'bg-cream text-navy font-semibold' : ''}`}>Venues</NavLink>
              <NavLink to="/gallery" onClick={closeMenu} className={({isActive}) => `${linkBase} ${isActive ? 'bg-cream text-navy font-semibold' : ''}`}>Gallery</NavLink>
              <NavLink to="/contact" onClick={closeMenu} className={({isActive}) => `${linkBase} ${isActive ? 'bg-cream text-navy font-semibold' : ''}`}>Contact</NavLink>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
