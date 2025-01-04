import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';

const ProductItemSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#F2F4F7" highlightColor="#FFF">
      <div className="border border-[#EBECEF] p-5 flex flex-col gap-4">
        <Skeleton height={'100px'} />
        <div className="flex flex-col items-start gap-2 w-full">
          <div className="w-full">
            <Skeleton height={'20px'} />
          </div>
          <div className="w-full">
            <Skeleton height={'35px'} borderRadius={'20px'} />
          </div>
        </div>
        <div className="w-full">
          <Skeleton count={4} height={'25px'} borderRadius={'20px'} />
        </div>
        <div className="w-full">
          <Skeleton count={5} height={'20px'} borderRadius={'20px'} />
        </div>
        <div className="w-full">
          <Skeleton height={'45px'} borderRadius={'10px'} />
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default ProductItemSkeleton;
