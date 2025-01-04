import React from 'react';
import Header from '../../atoms/Header';
import Hero from '../../organisms/Hero';
import Metrics from '../../organisms/Metrics';
import Features from '../../organisms/Features';
import Team from '../../organisms/Team';
import Products from '../../organisms/Products';
import Subscription from '../../organisms/Subscription';
import Footer from '../../atoms/Footer';

const Homepage = () => {
  return (
    <section>
      <Header />
      <Hero />
      <Metrics />
      <Features />
      <Team />
      <Products />
      <Subscription />
      <Footer />
    </section>
  );
};

export default Homepage;
