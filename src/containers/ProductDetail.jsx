import React from 'react';
import ProductInfo from '@components/ProductInfo';
import Image from 'next/image';
import close from '@icons/icon_close.png';
import '@styles/ProductDetail.scss';

const ProductDetail = () => {
  return (
    <aside className="ProductDetail">
      <div className="ProductDetail-close">
        <Image src={close} alt="close" />
      </div>
      <ProductInfo />
    </aside>
  );
};

export default ProductDetail;
