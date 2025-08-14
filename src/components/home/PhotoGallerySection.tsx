import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import carousel1 from '../../assets/carousel1.jpeg';
import carousel2 from '../../assets/carousel2.jpeg';
import carousel3 from '../../assets/carousel3.jpeg';
import carousel4 from '../../assets/carousel4.webp';
import carousel5 from '../../assets/carousel5.webp';
import carousel6 from '../../assets/carousel6.jpeg';
import carousel7 from '../../assets/carousel7.jpeg';
import ScrollAnimation from '../ui/ScrollAnimation';
import { buttonHover } from '../../lib/animations';

const PhotoGallerySection = () => {
  // Carousel images
  const carouselImages = [
    { id: 1, src: carousel1, alt: 'Luxury Estate 1' },
    { id: 2, src: carousel2, alt: 'Luxury Estate 2' },
    { id: 3, src: carousel3, alt: 'Luxury Estate 3' },
    { id: 4, src: carousel4, alt: 'Luxury Estate 4' },
    { id: 5, src: carousel5, alt: 'Luxury Estate 5' },
    { id: 6, src: carousel6, alt: 'Luxury Estate 6' },
    { id: 7, src: carousel7, alt: 'Luxury Estate 7' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);
  
  // Navigation functions
  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [isTransitioning, carouselImages.length]);
  
  const prevSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [isTransitioning, carouselImages.length]);
  
  const goToSlide = useCallback((index: number) => {
    if (!isTransitioning && index !== currentIndex) {
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [currentIndex, isTransitioning]);

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <ScrollAnimation animation="fadeInUp" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">
            <span className="text-primary">Featured </span>
            <span>Properties</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-light mb-8">
            Explore our collection of exceptional properties, each offering a unique blend of luxury, comfort, and sophistication.
          </p>
        </ScrollAnimation>
        
        {/* Carousel Container */}
        <ScrollAnimation animation="fadeInUp" className="relative overflow-hidden h-[600px] mb-12 group">
          {/* Main Carousel */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              className="h-full w-full absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <img 
                src={carouselImages[currentIndex].src} 
                alt={carouselImages[currentIndex].alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-8 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <h3 className="text-2xl md:text-3xl font-serif mb-2">{carouselImages[currentIndex].alt}</h3>
                <p className="text-white/80 font-light max-w-xl">Experience unparalleled luxury and sophistication in this exceptional estate.</p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation Arrows */}
          <motion.button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/30 text-white flex items-center justify-center md:opacity-0 md:group-hover:opacity-100 opacity-100 transition-opacity duration-300 hover:bg-primary"
            aria-label="Previous slide"
            variants={buttonHover}
            whileHover="hover"
            whileTap="tap"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </motion.button>
          
          <motion.button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/30 text-white flex items-center justify-center md:opacity-0 md:group-hover:opacity-100 opacity-100 transition-opacity duration-300 hover:bg-primary"
            aria-label="Next slide"
            variants={buttonHover}
            whileHover="hover"
            whileTap="tap"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </motion.button>
        </ScrollAnimation>
        
        {/* Indicators */}
        <motion.div 
          className="flex justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {carouselImages.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-primary w-6' : 'bg-gray-300 hover:bg-primary/50'}`}
              aria-label={`Go to slide ${index + 1}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            />
          ))}
        </motion.div>
        
        <ScrollAnimation animation="fadeInUp" className="text-center mt-8">
          <motion.button 
            className="border border-primary text-primary px-8 py-3 hover:bg-primary hover:text-white transition-colors duration-300 uppercase tracking-widest text-sm font-light"
            variants={buttonHover}
            whileHover="hover"
            whileTap="tap"
          >
            View All Properties
          </motion.button>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default PhotoGallerySection;