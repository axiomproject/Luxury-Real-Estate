import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import logo from '../../assets/logo.png';

// Add CSS for logo filter
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.mobile-menu-container')) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navigationItems = ['Home', 'Listing', 'Let\'s Move', 'About Us'];

  const handleNavClick = (_item: string) => {
    setMobileMenuOpen(false);
    // Add smooth scroll logic here if needed
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        scrolled
          ? 'bg-white/90 shadow-md py-4'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Desktop Navigation - Hidden at 1216px and below */}
        <nav className="hidden xl:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '')}`}
              className={cn(
                "text-sm uppercase tracking-widest font-light transition-colors duration-200 relative group",
                scrolled ? "text-gray-800 hover:text-primary" : "text-white hover:text-primary/90"
              )}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
        
        {/* Centered logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
          <img 
            src={logo} 
            alt="Marci Metzger Homes" 
            className={cn(
              "h-12 transition-all duration-300",
              scrolled ? "opacity-100" : "opacity-90 logo-white"
            )}
          />
        </div>

        {/* Mobile Menu Button - Visible at 1216px and below */}
        <div className="xl:hidden">
          <button 
            className={cn(
              "p-2 transition-all duration-200",
              scrolled 
                ? "text-primary hover:text-primary/80" 
                : "text-white hover:text-white/80"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <motion.div
              animate={mobileMenuOpen ? "open" : "closed"}
              className="relative w-6 h-6"
            >
              <motion.span
                className="absolute top-0 left-0 w-6 h-0.5 bg-current transform origin-center"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 8 }
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute top-2 left-0 w-6 h-0.5 bg-current transform origin-center"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute top-4 left-0 w-6 h-0.5 bg-current transform origin-center"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -8 }
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu-container fixed inset-0 z-50"
            style={{ 
              backgroundColor: 'rgba(0, 0, 0, 0.02)',
              backdropFilter: 'blur(20px)'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              className="absolute top-0 left-0 w-80 h-full shadow-2xl"
              style={{ 
                backgroundColor: 'white',
                borderRight: '1px solid #e5e7eb'
              }}
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between mb-8">
                  <img 
                    src={logo} 
                    alt="Marci Metzger Homes" 
                    className="h-10 opacity-90"
                  />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-gray-600 hover:text-primary transition-colors duration-200"
                    aria-label="Close mobile menu"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* Mobile Navigation Items */}
                <nav className="space-y-6">
                  {navigationItems.map((item, index) => (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '')}`}
                      className="block text-lg font-light text-gray-800 hover:text-primary transition-colors duration-200 py-2 border-b border-gray-100"
                      onClick={() => handleNavClick(item)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                    >
                      {item}
                    </motion.a>
                  ))}
                </nav>

                {/* Contact Info */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.4 }}
                  >
                    <p className="text-sm text-gray-600 mb-2">Contact Marci</p>
                    <a 
                      href="tel:206-919-6886" 
                      className="text-lg font-serif text-primary hover:text-primary/80 transition-colors duration-200"
                    >
                      206-919-6886
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;