export default function Footer() {
  return (
    <footer className="border-t border-navy/10 mt-12">
      <div className="container-xl py-8 text-sm grid gap-2 md:grid-cols-3">
        <div>
          <p className="font-semibold">Chef Victor Events</p>
          <p className="opacity-80">Est. 2006 • Treasure Coast & South Florida</p>
        </div>
        <div className="opacity-80">Licensed & insured • Full‑service catering</div>
        <div className="text-right opacity-80">© {new Date().getFullYear()} Chef Victor Events</div>
      </div>
    </footer>
  )
}
