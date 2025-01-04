import React from 'react';

type TTitle = {
  content: string;
  size?: string;
  classname?: string;
};

const Title: React.FC<TTitle> = ({
  content,
  size = '70',
  classname,
}) => {
  return (
    <h1
      className={`text-[#1F1F39] font-bold leading-[80px] text-[${size}px] ${classname}`}
    >
      {content}
    </h1>
  );
};

export default Title;
