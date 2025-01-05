import React from 'react';

type TTitle = {
  content: string;
  size?: string;
  classname?: string;
};

const Title: React.FC<TTitle> = ({ content, classname }) => {
  return (
    <h1 className={`text-[#1F1F39] font-bold  ${classname}`}>
      {content}
    </h1>
  );
};

export default Title;
