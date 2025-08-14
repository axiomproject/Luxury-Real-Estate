import { motion } from 'framer-motion';
import services1 from '../../assets/services1.jpeg';
import services2 from '../../assets/services2.jpeg';
import services3 from '../../assets/services3.jpeg';
import ScrollAnimation from '../ui/ScrollAnimation';
import { staggerContainer, cardHover, imageHover } from '../../lib/animations';

const ServicesSection = () => {
  const services = [
    {
      image: services1,
      title: 'Real Estate Done Right',
      subheader: 'Premium Marketing & Global Exposure',
      description: 'Nervous about your property adventure? Don\'t be. Whether you\'re getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!'
    },
    {
      image: services2,
      title: 'Commercial & Residential',
      subheader: 'Personalized Buyer Representation',
      description: 'Large or small, condo or mansion, we can find it and get at the price that\'s right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.'
    },
    {
      image: services3,
      title: 'Rely on Expertise',
      subheader: 'Strategic Real Estate Investments',
      description: 'If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.'
    },
  ];

  return (
    <section className="py-20 bg-[#f8f5f0]">
      <div className="container mx-auto px-6">
        <ScrollAnimation animation="fadeInUp" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">
            <span className="text-primary">Our </span>
            <span>Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-light">
            We offer a comprehensive suite of services designed to meet the unique needs of our discerning clientele.
          </p>
        </ScrollAnimation>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-10 shadow-sm hover:shadow-md transition-shadow duration-300 group"
              variants={cardHover}
              whileHover="hover"
              initial="initial"
            >
              <motion.div 
                className="mb-6 overflow-hidden rounded-md h-64"
                variants={imageHover}
                whileHover="hover"
              >
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <h3 className="text-xl font-serif mb-2">{service.title}</h3>
              <p className="text-primary text-sm uppercase tracking-wider mb-4">{service.subheader}</p>
              <p className="text-muted-foreground font-light">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;