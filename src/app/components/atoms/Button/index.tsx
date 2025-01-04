import React from 'react';

type TButton = {
  title: string;
  classname?: string;
};

const Button: React.FC<TButton> = ({ title, classname }) => {
  return (
    <button
      className={`uppercase bg-[#6D3FFF] rounded-md py-3 px-8 text-white font-semibold transition-all duration-500 ease-in-out hover:bg-opacity-80 ${classname}`}
    >
      {title}
    </button>
  );
};

export default Button;
