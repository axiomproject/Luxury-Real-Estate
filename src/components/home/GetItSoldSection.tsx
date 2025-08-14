
import { motion } from 'framer-motion';
import sold1 from '../../assets/sold1.jpeg';
import sold2 from '../../assets/sold2.jpeg';
import sold3 from '../../assets/sold3.jpeg';
import ScrollAnimation from '../ui/ScrollAnimation';
import { staggerContainer, cardHover, imageHover } from '../../lib/animations';

const GetItSoldSection = () => {
  const cards = [{
      image: sold1,
      title: 'Top Residential Sales Last 5 Years',
      description: 'We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year.'
    },
    {
      image: sold2,
      title: 'Don\'t Just List it...',
      description: 'Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.'
    },
    {
      image: sold3,
      title: 'Guide to Buyers',
      description: 'Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!'
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <ScrollAnimation animation="fadeInUp" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">
            <span className="text-primary">Get It </span>
            <span>Sold</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-light">
            Our proven three-step approach ensures your luxury property receives the attention it deserves and sells for the best possible price.
          </p>
        </ScrollAnimation>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {cards.map((card, index) => (
            <motion.div 
              key={index} 
              className="border border-border p-0 hover:border-primary hover:shadow-lg transition-all duration-500 group overflow-hidden"
              variants={cardHover}
              whileHover="hover"
              initial="initial"
            >
              <motion.div 
                className="mb-6 overflow-hidden h-56 w-full relative"
                variants={imageHover}
                whileHover="hover"
              >
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/30"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              </motion.div>
              <div className="p-8">
                <h3 className="text-xl font-serif mb-4">{card.title}</h3>
                <p className="text-muted-foreground font-light">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GetItSoldSection;