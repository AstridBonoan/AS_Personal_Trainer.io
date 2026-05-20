import { Booking } from './components/Booking'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Pricing } from './components/Pricing'
import { Programs } from './components/Programs'
import { Testimonials } from './components/Testimonials'
import { Transformations } from './components/Transformations'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Transformations />
        <Programs />
        <Testimonials />
        <Pricing />
        <Booking />
      </main>
      <Footer />
    </>
  )
}

export default App
