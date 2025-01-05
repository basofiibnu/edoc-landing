import React from 'react';
import { motion, useInView } from 'framer-motion';
import Description from '../../atoms/Description';
import Title from '../../atoms/Title';
import VerticalDivider from '../../atoms/VerticalDivider';
import { fadeUpVariants } from '@/app/lib/constants';

const Metrics = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="metrics"
      ref={ref}
      className="border-t-2 border-t-[#EBECEF] py-8 2xl:py-20"
    >
      <div className="container mx-auto px-6 2xl:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 2xl:gap-16">
          <motion.div
            className="opacity-70 max-w-[550px] leading-7 2xl:leading-[44px] text-[18px] lg:text-[20px] 2xl:text-[28px] text-center lg:text-left"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeUpVariants}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Description content="Number is the key of our performance and it’s never lie" />
          </motion.div>
          <div className="flex items-center flex-col lg:flex-row gap-6 lg:gap-10 2xl:gap-16 text-center 2xl:text-left">
            <motion.div
              className="flex flex-col gap-2"
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={fadeUpVariants}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
                delay: 0.2,
              }}
            >
              <Title
                content="58K"
                classname="text-[24px] lg:text-[32px] 2xl:text-[40px] leading-6 2xl:leading-7"
              />
              <Description
                content="Active User"
                classname="opacity-50 leading-4 lg:leading-7 2xl:leading-10 text-[16px] lg:text-[20px] 2xl:text-[24px]"
              />
            </motion.div>
            <VerticalDivider />
            <motion.div
              className="flex flex-col gap-2"
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={fadeUpVariants}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
                delay: 0.4,
              }}
            >
              <Title
                content="$28K"
                classname="text-[24px] lg:text-[32px] 2xl:text-[40px] leading-6 2xl:leading-7"
              />
              <Description
                content="GMV"
                classname="opacity-50 leading-4 lg:leading-7 2xl:leading-10 text-[16px] lg:text-[20px] 2xl:text-[24px]"
              />
            </motion.div>
            <VerticalDivider />
            <motion.div
              className="flex flex-col gap-2"
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={fadeUpVariants}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
                delay: 0.6,
              }}
            >
              <Title
                content="10%"
                classname="text-[24px] lg:text-[32px] 2xl:text-[40px] leading-6 2xl:leading-7"
              />
              <Description
                content="Growth"
                classname="opacity-50 leading-4 lg:leading-7 2xl:leading-10 text-[16px] lg:text-[20px] 2xl:text-[24px]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
