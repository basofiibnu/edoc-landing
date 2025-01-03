import React from 'react';

const Hero = () => {
  return (
    <section id="hero">
      <div className="pl-[100px] flex justify-between items-center">
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-[#1F1F39] font-bold leading-[80px] text-[65px]">
            Experience the latest digital revolution
          </h1>
          <p className="text-[22px] leading-[32px] text-[#1F1F39] opacity-50">
            Brace yourself for an extraordinary journey into the
            future of technology.
          </p>
          <div></div>
        </div>
        <div>
          <img src="/hero.svg" alt="hero" />
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Welcome to Our Platform
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Build scalable and modern web applications with ease.
          Designed for developers and users alike.
        </p>
      </div>
    </section>
  );
};

export default Hero;
