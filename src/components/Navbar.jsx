import { NavLink, useNavigate } from 'react-router-dom'

const linkBase = 'px-4 py-2 rounded-xl hover:bg-navy/10 transition'

export default function Navbar() {
  const navigate = useNavigate()
  return (
    <header className="sticky top-0 z-50 bg-navy border-b border-navy/10">
      <div className="container-xl flex items-center justify-between py-3">
        <button onClick={() => navigate('/')} className="flex items-center gap-3 text-3xl md:text-4xl font-display font-semibold tracking-wide text-cream">
          <img src="/images/logo.png" alt="Chef Victor Events Logo" className="h-12 w-auto" />
          Chef Victor Events
        </button>
        <nav className="flex gap-1 text-sm md:text-base text-cream">
          <NavLink to="/" className={({isActive}) => `${linkBase} ${isActive ? 'bg-cream text-navy' : ''}`}>Home</NavLink>
          <NavLink to="/catering" className={({isActive}) => `${linkBase} ${isActive ? 'bg-cream text-navy' : ''}`}>Catering</NavLink>
          <a href="https://rollatinirestaurant.com/" className={linkBase} rel="noopener" target="_blank">Restaurant</a>
          <NavLink to="/venues" className={({isActive}) => `${linkBase} ${isActive ? 'bg-cream text-navy' : ''}`}>Venues</NavLink>
          <NavLink to="/gallery" className={({isActive}) => `${linkBase} ${isActive ? 'bg-cream text-navy' : ''}`}>Gallery</NavLink>
          <NavLink to="/contact" className={({isActive}) => `${linkBase} ${isActive ? 'bg-cream text-navy' : ''}`}>Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}
