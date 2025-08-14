import './App.css'
import { motion } from 'framer-motion'
import Header from './components/ui/Header'
import Footer from './components/ui/Footer'
import Separator from './components/ui/Separator'
import HeroSection from './components/home/HeroSection'
import RealtorSection from './components/home/RealtorSection'
import GetItSoldSection from './components/home/GetItSoldSection'
import SearchListingsSection from './components/home/SearchListingsSection'
import PartnersSection from './components/home/PartnersSection'
import PhotoGallerySection from './components/home/PhotoGallerySection'
import ServicesSection from './components/home/ServicesSection'
import SocialMediaSection from './components/home/SocialMediaSection'
import ContactSection from './components/home/ContactSection'
import MapSection from './components/home/MapSection'
import { pageTransition } from './lib/animations'

function App() {
  return (
    <motion.div 
      className="flex flex-col min-h-screen"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <RealtorSection />
        <Separator />
        <GetItSoldSection />
        <SearchListingsSection />
        <PartnersSection />
        <PhotoGallerySection />
        <ServicesSection />
        <SocialMediaSection />
        <ContactSection />
        <MapSection />
      </main>
      <Footer />
    </motion.div>
  )
}

export default App
