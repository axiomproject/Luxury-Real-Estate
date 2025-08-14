import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { scrollReveal, fadeInUp, fadeInDown, fadeInLeft, fadeInRight, scaleIn } from '../../lib/animations';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'scrollReveal';
  delay?: number;
  threshold?: number;
  once?: boolean;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  className = '',
  animation = 'scrollReveal',
  delay = 0,
  threshold = 0.1,
  once = true,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: threshold, once });

  const getVariants = () => {
    switch (animation) {
      case 'fadeInUp':
        return fadeInUp;
      case 'fadeInDown':
        return fadeInDown;
      case 'fadeInLeft':
        return fadeInLeft;
      case 'fadeInRight':
        return fadeInRight;
      case 'scaleIn':
        return scaleIn;
      case 'scrollReveal':
      default:
        return scrollReveal;
    }
  };

  const variants = getVariants();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation; 