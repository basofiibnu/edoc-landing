import React from 'react';

type TBadge = {
  content: string;
};

const Badge: React.FC<TBadge> = ({ content }) => {
  return (
    <div className="bg-[#6D3FFF] w-fit px-5 py-2 rounded-full text-white font-semibold text-base">
      {content}
    </div>
  );
};

export default Badge;
