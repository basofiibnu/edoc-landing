import React, { useState } from 'react';
import Description from '../Description';
import Badge from '../Badge';
import Title from '../Title';
import Button from '../Button';
import Modal from '../Modal';

type TProductItem = {
  name: string;
  image: string;
  id: string;
};

const ProductItem: React.FC<TProductItem> = ({ name, image, id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <div className="border border-[#EBECEF] p-5 flex flex-col gap-4 transition-all duration-500 ease-in-out hover:border-[#6D3FFF]">
        <img src={image} alt="team" />
        <div className="flex flex-col items-start gap-2">
          <Description
            content="41 min ago"
            classname="text-sm leading-6"
          />
          <Badge content={id} />
        </div>
        <Title
          content={name || '-'}
          classname="text-[20px] leading-7"
        />
        <Description
          classname="text-sm leading-6"
          content="Nullam tincidunt, purus sit amet viverra auctor, quamque incidunt, puincidunt, Vestibulum tristique posuere iaculis. Sus."
        />
        <Button
          onClick={openModal}
          title="View Image"
          classname="capitalize bg-white text-[#6D3FFF] border border-[#6D3FFF]"
        />
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="flex flex-col gap-4 items-center justify-center">
          <img src={image} alt="team" />
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ProductItem;
