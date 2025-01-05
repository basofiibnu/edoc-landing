import React from 'react';
import Title from '../../atoms/Title';
import Description from '../../atoms/Description';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';

const Hero = () => {
  return (
    <section id="hero">
      <div className="px-6 2xl:pr-0 2xl:pl-[260px] flex flex-col-reverse 2xl:flex-row justify-between items-center gap-4 2xl:gap-16">
        <div className="flex-1 flex flex-col gap-4 text-center 2xl:text-left 2xl:gap-4">
          <Title
            content="Experience the latest digital revolution"
            classname="text-[36px] leading-[44px] 2xl:leading-[80px] 2xl:text-[70px]"
          />
          <Description
            content="Brace yourself for an extraordinary journey into the
            future of technology."
            classname="text-[16px] leading-6 2xl:leading-[48px] 2xl:text-[28px]"
          />
          <div className="flex gap-4 w-full 2xl:max-w-[80%] items-center border border-[#EBECEF] py-4 px-6 rounded-xl">
            <div className="flex-1">
              <Input placeholder="Your Email Address" type="text" />
            </div>
            <Button
              title="Get Started"
              classname="text-xs 2xl:text-base"
            />
          </div>
        </div>
        <div>
          <img src="/hero.svg" alt="hero" className="w-fit h-auto" />
        </div>
      </div>
      <div className="container mx-auto px-6 2xl:px-16 mt-5 mb-14">
        <Description
          content="Trusted by: "
          classname="font-bold text-sm text-[18px] block xl:hidden text-center"
        />
        <div className="grid grid-cols-2 xl:flex xl:flex-col 2xl:flex-row items-center justify-items-center xl:justify-between w-full gap-8 2xl:gap-5">
          <Description
            content="Trusted by: "
            classname="font-bold text-sm text-[18px] hidden xl:block"
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
