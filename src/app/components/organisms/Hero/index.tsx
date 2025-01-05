import React from 'react';
import { motion, useInView } from 'framer-motion';
import Title from '../../atoms/Title';
import Description from '../../atoms/Description';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import { fadeUpVariants } from '@/app/lib/constants';

const Hero = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="home" ref={ref}>
      <div className="px-6 2xl:pr-0 2xl:pl-[260px] flex flex-col-reverse lg:flex-row justify-center items-center gap-4 2xl:gap-16">
        <motion.div
          className="2xl:flex-1 flex flex-col gap-4 text-center lg:text-left 2xl:gap-4"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUpVariants}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Title
            content="Experience the latest digital revolution"
            classname="text-[36px] leading-[44px] 2xl:leading-[80px] 2xl:text-[70px]"
          />
          <Description
            content="Brace yourself for an extraordinary journey into the future of technology."
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
        </motion.div>
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUpVariants}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        >
          <img src="/hero.svg" alt="hero" className="w-fit h-auto" />
        </motion.div>
      </div>
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={fadeUpVariants}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        className="container mx-auto px-6 2xl:px-16 mt-5 mb-14"
      >
        <Description
          content="Trusted by: "
          classname="font-bold text-sm text-[18px] block lg:hidden text-center"
        />
        <div className="grid grid-cols-2 lg:flex items-center justify-items-center xl:justify-between w-full gap-8 lg:gap-5">
          <Description
            content="Trusted by: "
            classname="font-bold text-sm text-[18px] hidden lg:block"
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
      </motion.div>
    </section>
  );
};

export default Hero;
