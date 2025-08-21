export default function Footer() {
  return (
    <footer className="mt-16 bg-navy text-cream">
      <div className="container-xl py-10 grid gap-6 md:grid-cols-3">
        <div className="space-y-1">
          <p className="text-lg font-semibold">Chef Victor Events</p>
          <p className="opacity-80 text-sm">
            Est. 2006 • Treasure Coast &amp; South Florida
          </p>
        </div>

        <div className="space-y-2">
          <a
            href="mailto:Rollatini1@gmail.com"
            className="inline-block underline underline-offset-4 decoration-cream/60 hover:decoration-cream"
            aria-label="Email us at Rollatini1@gmail.com"
          >
            Rollatini1@gmail.com
          </a>

          {/* Phone number */}
          <a
            href="tel:+15551234567"
            className="block underline underline-offset-4 decoration-cream/60 hover:decoration-cream"
            aria-label="Call us at (555) 123-4567"
          >
            (561) 351-1383
          </a>

          <div>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener"
              aria-label="Visit our Instagram"
              className="inline-flex items-center gap-2 group"
            >
              {/* Instagram icon with official gradient */}
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <defs>
                  <linearGradient id="igGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f58529" />
                    <stop offset="50%" stopColor="#dd2a7b" />
                    <stop offset="100%" stopColor="#8134af" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#igGrad)"
                  d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm5 2a6 6 0 100 12 6 6 0 000-12zm0 2a4 4 0 110 8 4 4 0 010-8zm6.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"
                />
              </svg>
              <span className="underline underline-offset-4 decoration-transparent group-hover:decoration-cream/70">
                Instagram
              </span>
            </a>
          </div>
        </div>

        <div className="md:text-right opacity-80 text-sm self-end">
          © {new Date().getFullYear()} Chef Victor Events
        </div>
      </div>
    </footer>
  );
}