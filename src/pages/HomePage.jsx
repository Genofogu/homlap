// src/pages/HomePage.jsx

import React from 'react';
import Hero from '../components/Hero.jsx';
import HowItWorks from '../components/HowItWorks.jsx';
import Benefits from '../components/Benefits.jsx';
import Features from '../components/Features.jsx';
import Faq from '../components/Faq.jsx';
import Cta from '../components/Cta.jsx';
import ScrollAnimator from '../components/ScrollAnimator.jsx';

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