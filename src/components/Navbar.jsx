import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Rooms & Suites', href: '#rooms' },
    { label: 'Dining', href: '#dining' },
    { label: 'Amenities & Services', href: '#amenities' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact & Location', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-white font-semibold tracking-wide text-lg">
            Aurora Grand
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-200 hover:text-white transition-colors text-sm"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#book"
              className="ml-2 inline-flex items-center rounded-full bg-orange-500 hover:bg-orange-600 text-white font-medium px-4 py-2 transition-colors"
            >
              Book Now
            </a>
          </nav>

          <button
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block rounded px-3 py-2 text-gray-200 hover:text-white hover:bg-white/10"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#book"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-orange-500 hover:bg-orange-600 text-white font-medium px-4 py-2 transition-colors"
                onClick={() => setOpen(false)}
              >
                Book Now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
