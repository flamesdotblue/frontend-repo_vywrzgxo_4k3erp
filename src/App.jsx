import Navbar from './components/Navbar'
import Hero from './components/Hero'
import RoomsPreview from './components/RoomsPreview'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <RoomsPreview />
        {/* Additional sections (Dining, Amenities, Gallery, About) can be added similarly */}
      </main>
      <Footer />
    </div>
  )
}

export default App
