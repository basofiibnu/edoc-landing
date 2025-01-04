import React from 'react';
import Description from '../../atoms/Description';
import Title from '../../atoms/Title';
import Button from '../../atoms/Button';
import { FeatureLists } from '@/app/lib/constants';
import FeaturePoint from '../../atoms/FeaturePoint';

const Features = () => {
  return (
    <section id="features" className="bg-[#6D3FFF] py-16">
      <div className="container mx-auto px-16">
        <div className="flex items-center w-full gap-20">
          <div className=" flex flex-col items-start justify-center gap-10 w-full">
            <div className="flex flex-col gap-2">
              <Description
                content="Our Feature"
                classname="text-[28px] text-white"
              />
              <Title
                content="What you can do with our platform"
                classname="text-white"
              />
            </div>
            <Description
              content="Explore what other capabilities that our platform can help you"
              classname="text-white text-[24px] leading-10 max-w-[350px]"
            />
            <Button
              classname="text-[#6D3FFF] bg-white !font-bold"
              title="See All Feature"
            />
          </div>
          <div className="w-full">
            <div className="grid grid-cols-2 ">
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
