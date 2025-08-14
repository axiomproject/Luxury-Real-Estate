import React from 'react';
import partner1 from '../../assets/partner1.png';
import partner2 from '../../assets/partner2.png';
import partner3 from '../../assets/partner3.jpeg';
import partner4 from '../../assets/partner4.jpeg';

const PartnersSection = () => {
  // Partner logos
  const partners = [
    { name: 'The Ridge Realty Group', logo: partner1 },
    { name: 'Equal Housing Opportunity', logo: partner2 },
    { name: 'Realtor', logo: partner3 },
    { name: 'Pahrump Valley', logo: partner4 },
  ];

  return (
    <section className="py-16 bg-[#f8f5f0]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-serif font-light mb-4">
            <span className="text-primary">Our Trusted </span>
            <span>Partners</span>
          </h2>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className=" hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-24 w-auto object-contain" 
                title={partner.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;