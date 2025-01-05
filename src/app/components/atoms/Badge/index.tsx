import React from 'react';

type TBadge = {
  content: string;
};

const Badge: React.FC<TBadge> = ({ content }) => {
  return (
    <div className="bg-[#6D3FFF] w-fit px-3 2xl:px-5 py-1 2xl:py-2 rounded-full text-white font-semibold text-sm 2xl:text-base">
      {content}
    </div>
  );
};

export default Badge;
