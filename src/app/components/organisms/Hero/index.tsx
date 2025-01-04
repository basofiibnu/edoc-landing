import React from 'react';
import Title from '../../atoms/Title';
import Description from '../../atoms/Description';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';

const Hero = () => {
  return (
    <section id="hero">
      <div className="pl-[260px] flex justify-between items-center gap-16">
        <div className="flex-1 flex flex-col gap-4">
          <Title
            content="Experience the latest digital revolution"
            size="70"
          />
          <Description
            content="Brace yourself for an extraordinary journey into the
            future of technology."
            size="28"
          />
          <div className="flex gap-4 max-w-[80%] items-center border border-[#EBECEF] py-4 px-6 rounded-xl">
            <div className="flex-1">
              <Input placeholder="Your Email Address" type="text" />
            </div>
            <Button title="Get Started" />
          </div>
        </div>
        <div>
          <img src="/hero.svg" alt="hero" />
        </div>
      </div>
      <div className="container mx-auto px-16 mt-5 mb-14">
        <div className="flex items-center justify-between w-full">
          <Description
            content="Trusted by: "
            classname="font-bold text-[18px]"
          />
          {[
            'alibaba',
            'amazon',
            'ebay',
            'shopify',
            'snapdeal',
            'walmart',
          ].map((item) => (
            <img
              key={item}
              src={`/${item}.svg`}
              alt={item}
              className="grayscale"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
