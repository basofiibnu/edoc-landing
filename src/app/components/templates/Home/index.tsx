import React from 'react';
import Header from '../../atoms/Header';
import Hero from '../../organisms/Hero';
import Metrics from '../../organisms/Metrics';
import Features from '../../organisms/Features';

const Homepage = () => {
  return (
    <section>
      <Header />
      <Hero />
      <Metrics />
      <Features />
    </section>
  );
};

export default Homepage;
