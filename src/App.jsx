import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Doctors from './components/Doctors'
import Appointment from './components/Appointment'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Doctors />
        <Appointment />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
