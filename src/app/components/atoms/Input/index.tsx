import React from 'react';

type TInput = {
  type?: string;
  placeholder: string;
};

const Input: React.FC<TInput> = ({ type = 'text', placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full outline-none text-lg font-medium text-[#1F1F39] placeholder:text-[#1F1F39] placeholder:opacity-50"
    />
  );
};

export default Input;
