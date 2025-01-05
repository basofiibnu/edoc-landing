import React from 'react';
import Description from '../Description';
import { useInView, motion } from 'framer-motion';
import { fadeUpVariants } from '@/app/lib/constants';

const Footer = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <footer ref={ref} className="py-8 2xl:py-20">
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={fadeUpVariants}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="container mx-auto px-6 2xl:px-16"
      >
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 2xl:gap-24">
          <div className="flex flex-col gap-4 items-start col-span-2">
            <img alt="logo" src="/logo.svg" />
            <Description
              content="Our SaaS platform offers a seamless API dashboard for effortless integration and management"
              classname="text-sm 2xl:text-[18px] leading-6 2xl:leading-9"
            />
            <Description
              content="hello@pluck.com"
              classname="text-[16px] 2xl:text-[24px] font-bold leading-4 2xl:leading-7"
            />
            <Description
              content="+1-800-123 4567"
              classname="text-[16px] 2xl:text-[24px] font-bold leading-4 2xl:leading-7"
            />
          </div>
          <div className="flex flex-col items-start gap-1 2xl:gap-8">
            <Description
              content="Company"
              classname="text-sm 2xl:text-[18px] leading-6 2xl:leading-9 opacity-100 text-[#2E2A4A] font-semibold"
            />
            <Description
              content="About"
              classname="text-sm 2xl:text-[18px] leading-6 2xl:leading-9 font-semibold"
            />
            <Description
              content="Services"
              classname="text-sm 2xl:text-[18px] leading-6 2xl:leading-9 font-semibold"
            />
            <Description
              content="Careers"
              classname="text-sm 2xl:text-[18px] leading-6 2xl:leading-9 font-semibold"
            />
            <Description
              content="Blog"
              classname="text-sm 2xl:text-[18px] leading-6 2xl:leading-9 font-semibold"
            />
            <Description
              content="Pricing"
              classname="text-sm 2xl:text-[18px] leading-6 2xl:leading-9 font-semibold"
            />
          </div>
          <div className="flex flex-col items-start gap-1 2xl:gap-8">
            <Description
              content="Contact"
              classname="text-sm 2xl:text-[18px] leading-6 2xl:leading-9 opacity-100 text-[#2E2A4A] font-semibold"
            />
            <Description
              content="Help"
              classname="text-sm 2xl:text-[18px] leading-6 2xl:leading-9 font-semibold"
            />
            <Description
              content="FAQs"
              classname="text-sm 2xl:text-[18px] leading-6 2xl:leading-9 font-semibold"
            />
            <Description
              content="Press"
              classname="text-sm 2xl:text-[18px] leading-6 2xl:leading-9 font-semibold"
            />
            <Description
              content="Terms and Condition"
              classname="text-sm 2xl:text-[18px] leading-6 2xl:leading-9 font-semibold"
            />
            <Description
              content="Partners"
              classname="text-sm 2xl:text-[18px] leading-6 2xl:leading-9 font-semibold"
            />
          </div>
          <div className="flex flex-col items-start gap-1 2xl:gap-8">
            <Description
              content="Discover"
              classname="text-sm 2xl:text-[18px] leading-6 2xl:leading-9 opacity-100 text-[#2E2A4A] font-semibold"
            />
            <Description
              content="Affiliate"
              classname="text-sm 2xl:text-[18px] leading-6 2xl:leading-9 font-semibold"
            />
            <Description
              content="Partner Program"
              classname="text-sm 2xl:text-[18px] leading-6 2xl:leading-9 font-semibold"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={fadeUpVariants}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="pt-4 2xl:pt-8 border-t-2 border-t-[#EBECEF] mt-4 2xl:mt-16"
      >
        <div className="container mx-auto px-6 2xl:px-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between gap-4 2xl:gap-0">
            <Description
              content="Copyright © 2024 basofiiibnu@edotlanding. All rights reserved."
              classname="text-xs 2xl:text-[18px] leading-6 2xl:leading-9 font-semibold"
            />
            <div className="flex items-start 2xl:items-center gap-4">
              <img
                src="/facebook.svg"
                alt="facebook"
                className="cursor-pointer hover:opacity-60 transition-all duration-300 ease-in-out"
              />
              <img
                src="/x.svg"
                alt="x"
                className="cursor-pointer hover:opacity-60 transition-all duration-300 ease-in-out"
              />
              <img
                src="/linkedin.svg"
                alt="linkedin"
                className="cursor-pointer hover:opacity-60 transition-all duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
