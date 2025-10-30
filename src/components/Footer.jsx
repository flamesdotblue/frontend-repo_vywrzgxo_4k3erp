export default function Footer() {
  const secondary = [
    'Careers',
    'Privacy Policy',
    'Terms & Conditions',
    'FAQs',
    'Blog/News',
    'Sustainability Initiatives',
    'Special Offers',
    'Loyalty Program',
  ]

  return (
    <footer className="bg-gray-950 text-gray-300" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-white text-xl font-semibold">Aurora Grand</h3>
            <p className="mt-3 text-gray-400 text-sm max-w-sm">
              Business-class comfort in the city center. Thoughtful service, modern design, and memorable stays.
            </p>
            <div className="mt-4 text-sm">
              <p>Contact: +1 (555) 012-3456</p>
              <p>Email: reservations@auroragrand.com</p>
              <p>Location: 100 Skyline Ave, Metropolis</p>
            </div>
          </div>

          <div className="md:col-span-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h4 className="text-white font-medium">Quick Links</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a className="hover:text-white" href="#rooms">Rooms & Suites</a></li>
                <li><a className="hover:text-white" href="#dining">Dining</a></li>
                <li><a className="hover:text-white" href="#amenities">Amenities & Services</a></li>
                <li><a className="hover:text-white" href="#gallery">Gallery</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium">More</h4>
              <ul className="mt-3 space-y-2 text-sm">
                {secondary.map((s) => (
                  <li key={s}><a className="hover:text-white" href="#">{s}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium">Connect</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a className="hover:text-white" href="#">Instagram</a></li>
                <li><a className="hover:text-white" href="#">Facebook</a></li>
                <li><a className="hover:text-white" href="#">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-gray-400 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Aurora Grand. All rights reserved.</p>
          <a href="#home" className="hover:text-white">Back to top</a>
        </div>
      </div>
    </footer>
  )
}
