import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import close from '@icons/icon_close.png';
import imageDefault from '@logos/default-product-image.png';
import Image from 'next/image';

import styles from '@styles/OrderItem.module.scss';

const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  return (
    <div className={styles.OrderItem}>
      <figure>
        <Image width={70} height={70} src={product?.images[0] ? product.images[0] : imageDefault} alt={product?.title} />
      </figure>
      <p>{product?.title}</p>
      <p>${product?.price}</p>
      <Image width={30} height={30} className={(styles.pointer, styles['more-clickable-area'])} src={close} alt="close" onClick={() => handleRemove(product)} />
    </div>
  );
};

export default OrderItem;
