import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'


export default function App() {
  return (
    <div className="min-h-[100dvh] overflow-x-hidden flex flex-col bg-cream text-navy font-body">
      <a href="#main-content" className="sr-only focus:not-sr-only fixed top-2 left-2 z-[100] bg-navy text-cream px-4 py-2 rounded shadow">Skip to content</a>

      <ScrollToTop />
      <Navbar />

      <main id="main-content" className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
