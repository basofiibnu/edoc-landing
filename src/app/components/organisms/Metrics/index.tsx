import React from 'react';
import Description from '../../atoms/Description';
import Title from '../../atoms/Title';
import VerticalDivider from '../../atoms/VerticalDivider';

const Metrics = () => {
  return (
    <section
      id="metrics"
      className="border-t-2 border-t-[#EBECEF] py-20"
    >
      <div className="container mx-auto px-16">
        <div className="flex items-center justify-between gap-16">
          <Description
            content="Number is the key of our performance and it’s never lie"
            classname="opacity-70 max-w-[550px] leading-[44px] text-[28px]"
          />
          <div className="flex items-center gap-16">
            <div className="flex flex-col gap-2">
              <Title
                content="58K"
                classname="text-[40px] leading-7"
              />
              <Description
                content="Active User"
                classname="opacity-50 leading-10 text-[24px]"
              />
            </div>
            <VerticalDivider />
            <div className="flex flex-col gap-2">
              <Title
                content="$28K"
                classname="text-[40px] leading-7"
              />
              <Description
                content="GMV"
                classname="opacity-50 leading-10 text-[24px]"
              />
            </div>
            <VerticalDivider />
            <div className="flex flex-col gap-2">
              <Title
                content="10%"
                classname="text-[40px] leading-7"
              />
              <Description
                content="Growth"
                classname="opacity-50 leading-10 text-[24px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
