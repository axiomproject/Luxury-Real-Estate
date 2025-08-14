import React, { useState } from 'react';
import { motion } from 'framer-motion';
import dreamhomeImage from '../../assets/dreamhome.jpeg';
import CustomDropdown from '../ui/CustomDropdown';
import ScrollAnimation from '../ui/ScrollAnimation';
import { fadeInUp, buttonHover } from '../../lib/animations';

const SearchListingsSection = () => {
  const [formData, setFormData] = useState({
    location: '',
    propertyType: '',
    priceRange: '',
    bedrooms: '',
    bathrooms: '',
    features: ''
  });

  const handleDropdownChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const dropdownOptions = {
    location: [
      { value: '', label: 'Any Location' },
      { value: 'beverly-hills', label: 'Beverly Hills' },
      { value: 'malibu', label: 'Malibu' },
      { value: 'bel-air', label: 'Bel Air' }
    ],
    propertyType: [
      { value: '', label: 'Any Type' },
      { value: 'house', label: 'House' },
      { value: 'condo', label: 'Condo' },
      { value: 'penthouse', label: 'Penthouse' },
      { value: 'estate', label: 'Estate' }
    ],
    priceRange: [
      { value: '', label: 'Any Price' },
      { value: '1m-3m', label: '$1M - $3M' },
      { value: '3m-5m', label: '$3M - $5M' },
      { value: '5m-10m', label: '$5M - $10M' },
      { value: '10m+', label: '$10M+' }
    ],
    bedrooms: [
      { value: '', label: 'Any' },
      { value: '2+', label: '2+' },
      { value: '3+', label: '3+' },
      { value: '4+', label: '4+' },
      { value: '5+', label: '5+' }
    ],
    bathrooms: [
      { value: '', label: 'Any' },
      { value: '2+', label: '2+' },
      { value: '3+', label: '3+' },
      { value: '4+', label: '4+' },
      { value: '5+', label: '5+' }
    ],
    features: [
      { value: '', label: 'Any' },
      { value: 'pool', label: 'Pool' },
      { value: 'view', label: 'Ocean View' },
      { value: 'smart-home', label: 'Smart Home' },
      { value: 'wine-cellar', label: 'Wine Cellar' }
    ]
  };

  return (
    <section className="py-20 text-white relative">
      {/* Background image with overlay */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url(${dreamhomeImage})` }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </motion.div>
      
      <div className="relative z-10">
        <div className="container mx-auto px-6">
          <ScrollAnimation animation="fadeInUp" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">
              <span className="text-primary">Find Your </span>
              <span>Dream Home</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto font-light">
              Browse our exclusive portfolio of luxury properties tailored to your unique lifestyle and preferences.
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fadeInUp" className="bg-white/10 backdrop-blur-md p-8 md:p-10 max-w-4xl mx-auto rounded-lg border border-white/20">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <CustomDropdown
                  label="Location"
                  options={dropdownOptions.location}
                  value={formData.location}
                  onChange={(value) => handleDropdownChange('location', value)}
                  placeholder="Any Location"
                />
                
                <CustomDropdown
                  label="Property Type"
                  options={dropdownOptions.propertyType}
                  value={formData.propertyType}
                  onChange={(value) => handleDropdownChange('propertyType', value)}
                  placeholder="Any Type"
                />
                
                <CustomDropdown
                  label="Price Range"
                  options={dropdownOptions.priceRange}
                  value={formData.priceRange}
                  onChange={(value) => handleDropdownChange('priceRange', value)}
                  placeholder="Any Price"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <CustomDropdown
                  label="Bedrooms"
                  options={dropdownOptions.bedrooms}
                  value={formData.bedrooms}
                  onChange={(value) => handleDropdownChange('bedrooms', value)}
                  placeholder="Any"
                />
                
                <CustomDropdown
                  label="Bathrooms"
                  options={dropdownOptions.bathrooms}
                  value={formData.bathrooms}
                  onChange={(value) => handleDropdownChange('bathrooms', value)}
                  placeholder="Any"
                />
                
                <CustomDropdown
                  label="Features"
                  options={dropdownOptions.features}
                  value={formData.features}
                  onChange={(value) => handleDropdownChange('features', value)}
                  placeholder="Any"
                />
              </div>
              
              <div className="text-center">
                <motion.button 
                  className="bg-primary text-white px-8 py-3 hover:bg-primary/90 transition-colors duration-300 uppercase tracking-widest text-sm font-light"
                  variants={buttonHover}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Search Properties
                </motion.button>
              </div>
            </form>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default SearchListingsSection;