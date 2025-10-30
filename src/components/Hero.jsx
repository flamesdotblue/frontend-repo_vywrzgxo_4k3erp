import Spline from '@splinetool/react-spline'
import { Calendar, Users, BedDouble } from 'lucide-react'
import { useState } from 'react'

export default function Hero() {
  const [form, setForm] = useState({
    checkin: '',
    checkout: '',
    guests: 2,
    roomType: 'Deluxe Room',
  })

  const roomTypes = ['Deluxe Room', 'Executive Suite', 'Family Suite', 'Presidential Suite']

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function submit(e) {
    e.preventDefault()
    const query = new URLSearchParams({
      checkin: form.checkin,
      checkout: form.checkout,
      guests: String(form.guests),
      roomType: form.roomType,
    }).toString()
    window.location.hash = `book?${query}`
  }

  return (
    <section className="relative h-[90vh] min-h-[640px] w-full" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-3xl text-white">
          <p className="uppercase tracking-widest text-sm text-orange-300">Redefining Luxurious & Corporate Stays</p>
          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            Immerse in Modern Comfort at Aurora Grand
          </h1>
          <p className="mt-4 text-white/80 text-lg">
            Elegant rooms, elevated dining, and thoughtful amenities crafted for business and leisure.
          </p>

          <form onSubmit={submit} id="book" className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-3 bg-white/90 backdrop-blur rounded-xl p-3 text-gray-800">
            <div className="col-span-1 md:col-span-2">
              <label className="block text-xs font-medium text-gray-600 mb-1">Check-in</label>
              <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2">
                <Calendar className="text-gray-400" size={18} />
                <input
                  required
                  type="date"
                  name="checkin"
                  value={form.checkin}
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none"
                />
              </div>
            </div>

            <div className="col-span-1 md:col-span-2">
              <label className="block text-xs font-medium text-gray-600 mb-1">Check-out</label>
              <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2">
                <Calendar className="text-gray-400" size={18} />
                <input
                  required
                  type="date"
                  name="checkout"
                  value={form.checkout}
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none"
                />
              </div>
            </div>

            <div className="col-span-1 md:col-span-1">
              <label className="block text-xs font-medium text-gray-600 mb-1">Guests</label>
              <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2">
                <Users className="text-gray-400" size={18} />
                <select
                  name="guests"
                  value={form.guests}
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none"
                >
                  {[1,2,3,4,5,6].map((n) => (
                    <option value={n} key={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="col-span-1 md:col-span-3">
              <label className="block text-xs font-medium text-gray-600 mb-1">Room Type</label>
              <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2">
                <BedDouble className="text-gray-400" size={18} />
                <select
                  name="roomType"
                  value={form.roomType}
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none"
                >
                  {roomTypes.map((t) => (
                    <option value={t} key={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="col-span-1 md:col-span-2 flex items-end">
              <button
                type="submit"
                className="w-full inline-flex justify-center rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 transition-colors"
              >
                Check Availability
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
