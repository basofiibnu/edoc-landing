import React from 'react';

type TDescription = {
  content: string;
  size?: string;
  classname?: string;
};

const Description: React.FC<TDescription> = ({
  content,
  classname,
}) => {
  return (
    <p className={` text-[#1F1F39] opacity-50 ${classname}`}>
      {content}
    </p>
  );
};

export default Description;
