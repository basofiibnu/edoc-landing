import React, { useEffect, useState } from 'react';
import Title from '../../atoms/Title';
import Description from '../../atoms/Description';
import ProductItem from '../../atoms/ProductItem';
import useFetch from '@/app/lib/hooks';
import { TProductItem } from '@/app/lib/types';
import ProductItemSkeleton from '../../atoms/ProductItem/Skeleton';

const Products = () => {
  const { data: productData, loading: productLoading } = useFetch(
    'https://www.giovankov.com/api/product.json'
  );
  const { data: imageData, loading: imageLoading } = useFetch(
    'https://www.giovankov.com/api/image.json'
  );

  const [combinedData, setCombinedData] = useState<TProductItem[]>(
    []
  );

  useEffect(() => {
    if (
      !productLoading &&
      !imageLoading &&
      productData &&
      imageData
    ) {
      // Ensure both data sources are arrays
      const validProductData = Array.isArray(productData?.data)
        ? productData.data
        : [];
      const validImageData = Array.isArray(imageData?.data)
        ? imageData.data
        : [];

      console.log(productData, imageData);

      // Create the ID-to-Name map
      const idNameMap = Object.fromEntries(
        validProductData.map((item: { id: string; name: string }) => [
          item.id,
          item.name,
        ])
      );

      // Combine the data
      const result: TProductItem[] = [];
      validImageData.forEach((group: TProductItem) => {
        if (Array.isArray(group.id)) {
          group.id.forEach((id) => {
            result.push({
              id,
              name: idNameMap[id] || null,
              image: group.image,
            });
          });
        }
      });

      setCombinedData(result);
    }
  }, [productLoading, imageLoading, productData, imageData]);

  return (
    <section id="products" className="py-8 2xl:py-20">
      <div className="container mx-auto  px-6 2xl:px-16">
        <div className="flex flex-col items-center gap-3">
          <Title
            content="Our Products"
            classname="text-[36px] leading-[44px] 2xl:text-[70px] 2xl:leading-[80px] text-center"
          />
          <Description
            content="Brace yourself for an extraordinary journey into our products of technology."
            classname="text-[18px] leading-6 2xl:text-[24px] 2xl:leading-10 text-center"
          />
        </div>

        <div className="grid grid-cols-2 2xl:grid-cols-4 gap-2 2xl:gap-8 mt-10">
          {productLoading && imageLoading ? (
            <>
              <ProductItemSkeleton />
              <ProductItemSkeleton />
              <ProductItemSkeleton />
              <ProductItemSkeleton />
            </>
          ) : (
            combinedData.length > 0 &&
            combinedData.map((item: TProductItem) => (
              <ProductItem key={item.id} {...item} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
