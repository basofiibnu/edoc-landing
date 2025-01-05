import React from 'react';
import Title from '../../atoms/Title';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import { useInView, motion } from 'framer-motion';
import { fadeUpVariants } from '@/app/lib/constants';

const Subscription = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section
      ref={ref}
      id="subscriptions"
      className="bg-[#2E2A4A] pt-16 pb-10"
    >
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={fadeUpVariants}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="px-6 2xl:pr-0 2xl:pl-[260px] flex flex-col-reverse lg:flex-row justify-center items-center gap-4 2xl:gap-16"
      >
        <div className="2xl:flex-1 flex flex-col gap-4 text-center lg:text-left 2xl:gap-4">
          <Title
            content="Ready to unlock the full potential?"
            classname="text-[36px] leading-[44px] 2xl:text-[70px] 2xl:leading-[80px] text-center 2xl:text-left text-white"
          />

          <div className="flex gap-4 w-full 2xl:max-w-[80%] items-center border border-white bg-white py-4 px-6 rounded-xl">
            <div className="flex-1">
              <Input placeholder="Your Email Address" type="text" />
            </div>
            <Button
              title="Get Started"
              classname="text-xs 2xl:text-base"
            />
          </div>
        </div>
        <div className="hidden lg:block">
          <img src="/hero.svg" alt="hero" />
        </div>
      </motion.div>
    </section>
  );
};

export default Subscription;
