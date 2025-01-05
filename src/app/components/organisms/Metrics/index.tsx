import React from 'react';
import Description from '../../atoms/Description';
import Title from '../../atoms/Title';
import VerticalDivider from '../../atoms/VerticalDivider';

const Metrics = () => {
  return (
    <section
      id="metrics"
      className="border-t-2 border-t-[#EBECEF] py-8 2xl:py-20"
    >
      <div className="container mx-auto px-6 2xl:px-16">
        <div className="flex flex-col 2xl:flex-row items-center justify-between gap-6 2xl:gap-16">
          <Description
            content="Number is the key of our performance and it’s never lie"
            classname="opacity-70 max-w-[550px] leading-7 2xl:leading-[44px] text-[18px] 2xl:text-[28px] text-center 2xl:text-left"
          />
          <div className="flex items-center flex-col 2xl:flex-row gap-6 2xl:gap-16 text-center 2xl:text-left">
            <div className="flex flex-col gap-2 ">
              <Title
                content="58K"
                classname="text-[24px] 2xl:text-[40px] leading-6 2xl:leading-7"
              />
              <Description
                content="Active User"
                classname="opacity-50 leading-4 2xl:leading-10 text-[16px] 2xl:text-[24px]"
              />
            </div>
            <VerticalDivider />
            <div className="flex flex-col gap-2">
              <Title
                content="$28K"
                classname="text-[24px] 2xl:text-[40px] leading-6 2xl:leading-7"
              />
              <Description
                content="GMV"
                classname="opacity-50 leading-4 2xl:leading-10 text-[16px] 2xl:text-[24px]"
              />
            </div>
            <VerticalDivider />
            <div className="flex flex-col gap-2">
              <Title
                content="10%"
                classname="text-[24px] 2xl:text-[40px] leading-6 2xl:leading-7"
              />
              <Description
                content="Growth"
                classname="opacity-50 leading-4 2xl:leading-10 text-[16px] 2xl:text-[24px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
