// src/pages/HomePage.jsx

import React from 'react';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Benefits from '../components/Benefits';
import Features from '../components/Features';
import Faq from '../components/Faq';
import Cta from '../components/Cta';
import ScrollAnimator from '../components/ScrollAnimator';

const HomePage = () => {
  return (
    <>
      <Hero />
      <ScrollAnimator><HowItWorks /></ScrollAnimator>
      <ScrollAnimator><Benefits /></ScrollAnimator>
      <ScrollAnimator><Features /></ScrollAnimator>
      <ScrollAnimator><Faq /></ScrollAnimator>
      <ScrollAnimator><Cta /></ScrollAnimator>
    </>
  );
};

export default HomePage;