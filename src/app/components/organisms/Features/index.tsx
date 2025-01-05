import React from 'react';
import Description from '../../atoms/Description';
import Title from '../../atoms/Title';
import Button from '../../atoms/Button';
import { FeatureLists } from '@/app/lib/constants';
import FeaturePoint from '../../atoms/FeaturePoint';

const Features = () => {
  return (
    <section id="features" className="bg-[#6D3FFF] py-8 2xl:py-16">
      <div className="container mx-auto px-6 2xl:px-16">
        <div className="flex items-center w-full gap-6 2xl:gap-20 flex-col 2xl:flex-row">
          <div className="flex flex-col items-center 2xl:items-start justify-center gap-6 2xl:gap-10 w-full text-center 2xl:text-left">
            <div className="flex flex-col gap-2">
              <Description
                content="Our Feature"
                classname="text-[18px] leading-6 2xl:leading-[48px] 2xl:text-[28px] text-white"
              />
              <Title
                content="What you can do with our platform"
                classname="text-white text-[36px] leading-[44px] 2xl:text-[70px] 2xl:leading-[80px]"
              />
            </div>
            <Description
              content="Explore what other capabilities that our platform can help you"
              classname="text-white text-[18px] leading-6 2xl:text-[24px] 2xl:leading-10 max-w-[350px]"
            />
            <Button
              classname="text-[#6D3FFF] bg-white !font-bold text-xs 2xl:text-base hidden xl:block"
              title="See All Feature"
            />
          </div>
          <div className="w-full">
            <div className="grid 2xl:grid-cols-2">
              {FeatureLists.map((item) => (
                <FeaturePoint
                  key={item.content}
                  icon={item.icon}
                  content={item.content}
                  desc={item.desc}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
