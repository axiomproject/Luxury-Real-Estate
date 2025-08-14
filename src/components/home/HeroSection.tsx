import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import heroImage from '../../assets/hero.jpeg';
import AnimatedText from '../ui/AnimatedText';
import { fadeInUp, buttonHover } from '../../lib/animations';

const HeroSection = () => {
  useEffect(() => {
    // Add subtle zoom animation to hero background
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
      heroBackground.classList.add('animate-subtle-zoom');
    }
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <motion.div 
        className="hero-background absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url(${heroImage})` }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
      </motion.div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.1 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light tracking-tight mb-4">
            <AnimatedText 
              text="MARCI METZGER - THE RIDGE REALTY GROUP"
              className="block text-primary uppercase tracking-widest text-2xl md:text-3xl mb-4"
              type="hero"
              splitChars={true}
              delay={0.2}
            />
            <motion.div 
              className="w-24 h-1 bg-primary mx-auto mb-4"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 96, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
            <AnimatedText 
              text="Pahrump Realtor"
              className="block font-bold"
              type="hero"
              splitChars={true}
              delay={0.7}
            />
          </h1>
        </motion.div>

        <motion.div 
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 96, opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.9 }}
        >
          <AnimatedText 
            text="Elevating the art of real estate with unparalleled service and attention to detail. Your journey to exceptional living begins here."
            className="text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light"
            type="hero"
            splitWords={true}
            delay={1.0}
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 1.2 }}
        >
          <motion.a 
            href="tel:206-919-6886" 
            className="inline-flex items-center bg-primary text-white px-10 py-4 rounded-none hover:bg-primary/90 transition-colors duration-300 uppercase tracking-widest text-sm font-light border border-primary/30 shadow-lg group"
            variants={buttonHover}
            whileHover="hover"
            whileTap="tap"
          >
            <span>CALL NOW</span>
          </motion.a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.button 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer group"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        onClick={() => {
          const nextSection = document.querySelector('main > *:nth-child(2)');
          if (nextSection) {
            nextSection.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }
        }}
        aria-label="Scroll to next section"
      >
        <motion.svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={1.5} 
          stroke="currentColor" 
          className="w-6 h-6 text-white group-hover:text-primary transition-colors duration-300"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
        </motion.svg>
      </motion.button>
    </section>
  );
};

export default HeroSection;