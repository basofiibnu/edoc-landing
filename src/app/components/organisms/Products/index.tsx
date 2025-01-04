import React from 'react';
import Title from '../../atoms/Title';
import Description from '../../atoms/Description';
import ProductItem from '../../atoms/ProductItem';

const Products = () => {
  return (
    <section id="products" className="py-16">
      <div className="container mx-auto px-16">
        <div className="flex flex-col items-center gap-3">
          <Title content="Our Products" classname="text-center" />
          <Description
            content="Brace yourself for an extraordinary journey into our products of technology."
            classname="text-center"
          />
        </div>

        <div className="grid grid-cols-4 gap-8 mt-10">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>
    </section>
  );
};

export default Products;
