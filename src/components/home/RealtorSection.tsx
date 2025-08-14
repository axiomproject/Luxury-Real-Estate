import React from 'react';
import { motion } from 'framer-motion';
import realtorImage from '../../assets/realtor.jpeg';
import ScrollAnimation from '../ui/ScrollAnimation';
import AnimatedCounter from '../ui/AnimatedCounter';
import { fadeInLeft, fadeInRight, buttonHover, scaleIn } from '../../lib/animations';

const RealtorSection = () => {
  return (
    <section className="py-20 bg-[#f8f5f0]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <ScrollAnimation animation="fadeInLeft" className="relative">
            <motion.div 
              className="aspect-[3/4] bg-cover bg-center rounded-none" 
              style={{ backgroundImage: `url(${realtorImage})` }}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.div 
                className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary flex items-center justify-center"
                initial={{ scale: 0, rotate: -90 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <span className="text-white font-serif text-xl">20+</span>
              </motion.div>
            </motion.div>
            <motion.div 
              className="absolute -bottom-3 -right-3 w-24 h-24 border border-primary"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
            />
          </ScrollAnimation>
          
          {/* Content */}
          <ScrollAnimation animation="fadeInRight" className="space-y-6">
            <motion.h2 
              className="text-3xl md:text-4xl font-serif font-light mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
              }}
            >
              <span className="text-primary">MARCI METZGER</span>
              <span className="block">REALTOR FOR NEARLY 3 DECADES!</span>
            </motion.h2>
            
            <motion.p 
              className="text-muted-foreground mb-8 font-light leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              With nearly 3 decades of experience in the real estate market, Marci Metzger has established herself as the premier choice for discerning clients seeking exceptional properties.
            </motion.p>
            
            <motion.p 
              className="text-lg font-serif text-primary mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              206-919-6886
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-2 gap-6 mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1, 
                  transition: { 
                    staggerChildren: 0.1,
                    delayChildren: 0.6
                  } 
                }
              }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
              >
                <p className="text-4xl font-serif text-primary mb-2">
                  <AnimatedCounter end={650} suffix="+" delay={0.8} />
                </p>
                <p className="text-sm uppercase tracking-wider">Properties Sold</p>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
              >
                <p className="text-4xl font-serif text-primary mb-2">
                  <AnimatedCounter end={500} prefix="$" suffix="M+" delay={1.0} />
                </p>
                <p className="text-sm uppercase tracking-wider">In Sales Volume</p>
              </motion.div>
            </motion.div>
            
            <motion.button 
              className="border border-primary text-primary px-8 py-3 hover:bg-primary hover:text-white transition-colors duration-300 uppercase tracking-widest text-sm font-light"
              variants={buttonHover}
              whileHover="hover"
              whileTap="tap"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              Meet Marci
            </motion.button>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default RealtorSection;