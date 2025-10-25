// src/components/ScrollAnimator.jsx

import React from 'react';
import { useInView } from 'react-intersection-observer';

const ScrollAnimator = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.1, 
  });

  return (
    <div ref={ref} className={`scroll-animator ${inView ? 'is-visible' : ''}`}>
      {children}
    </div>
  );
};

export default ScrollAnimator;