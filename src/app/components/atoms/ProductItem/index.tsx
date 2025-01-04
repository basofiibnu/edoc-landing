import React from 'react';
import Description from '../Description';
import Badge from '../Badge';
import Title from '../Title';
import Button from '../Button';

const ProductItem = () => {
  return (
    <div className="border border-[#EBECEF] p-5 flex flex-col gap-4 transition-all duration-500 ease-in-out hover:border-[#6D3FFF]">
      <img src="/team.avif" alt="team" />
      <div className="flex flex-col items-start gap-2">
        <Description
          content="41 min ago"
          classname="text-sm leading-6"
        />
        <Badge content="Best Practice" />
      </div>
      <Title
        content="The best way to use Pluck and integrate all your system"
        classname="text-[20px] leading-7"
      />
      <Description
        classname="text-sm leading-6"
        content="Nullam tincidunt, purus sit amet viverra auctor, quamque incidunt, puincidunt, Vestibulum tristique posuere iaculis. Sus."
      />
      <Button
        title="Read the Article"
        classname="capitalize bg-white text-[#6D3FFF] border border-[#6D3FFF]"
      />
    </div>
  );
};

export default ProductItem;
