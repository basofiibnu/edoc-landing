import React from 'react';
import Title from '../Title';
import Description from '../Description';

type TDescription = {
  content: string;
  desc: string;
  icon: React.ReactNode;
};

const FeaturePoint: React.FC<TDescription> = ({
  content,
  desc,
  icon,
}) => {
  return (
    <div className="bg-transparent rounded-lg p-10 flex flex-col items-center justify-center gap-5 transition-all duration-500 ease-in-out hover:bg-white group">
      <div className="bg-white rounded-xl p-3 group-hover:bg-[#6D3FFF]">
        {icon}
      </div>
      <Title
        content={content}
        classname="text-white text-[24px] leading-7 text-center group-hover:text-[#252525]"
      />
      <Description
        content={desc}
        classname="text-[20px] text-white text-center leading-8 opacity-70 font-normal group-hover:text-[#1F1F39]"
      />
    </div>
  );
};

export default FeaturePoint;
