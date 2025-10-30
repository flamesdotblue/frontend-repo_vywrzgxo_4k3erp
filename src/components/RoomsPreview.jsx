import { ArrowRight } from 'lucide-react'

const rooms = [
  {
    title: 'Deluxe Room',
    img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1640&auto=format&fit=crop',
    perks: ['King Bed', 'City View', 'Rain Shower'],
  },
  {
    title: 'Executive Suite',
    img: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1640&auto=format&fit=crop',
    perks: ['Separate Lounge', 'Workspace', 'Complimentary Breakfast'],
  },
  {
    title: 'Family Suite',
    img: 'https://images.unsplash.com/photo-1505691723518-36a5ac3b2b8f?q=80&w=1640&auto=format&fit=crop',
    perks: ['Two Bedrooms', 'Kitchenette', 'Kids Amenities'],
  },
  {
    title: 'Presidential Suite',
    img: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1640&auto=format&fit=crop',
    perks: ['Panoramic View', 'Private Bar', 'Butler Service'],
  },
]

export default function RoomsPreview() {
  return (
    <section id="rooms" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Rooms & Suites</h2>
            <p className="mt-2 text-gray-600">Explore accommodations tailored for business and leisure.</p>
          </div>
          <a href="#rooms-all" className="hidden sm:inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium">
            View all
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {rooms.map((room) => (
            <article key={room.title} className="group rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={room.img} alt={room.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{room.title}</h3>
                <ul className="mt-2 text-sm text-gray-600 space-y-1">
                  {room.perks.map((p) => (
                    <li key={p}>• {p}</li>
                  ))}
                </ul>
                <div className="mt-4 flex items-center justify-between">
                  <a href="#" className="text-orange-600 hover:text-orange-700 font-medium text-sm">View details</a>
                  <a href="#book" className="inline-flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900">
                    Book now
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
