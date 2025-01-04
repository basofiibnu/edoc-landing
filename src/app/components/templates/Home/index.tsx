import React from 'react';
import Header from '../../atoms/Header';
import Hero from '../../organisms/Hero';
import Metrics from '../../organisms/Metrics';
import Features from '../../organisms/Features';
import Team from '../../organisms/Team';
import Products from '../../organisms/Products';

const Homepage = () => {
  return (
    <section>
      <Header />
      <Hero />
      <Metrics />
      <Features />
      <Team />
      <Products />
    </section>
  );
};

export default Homepage;
