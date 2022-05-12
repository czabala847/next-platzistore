import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import addedToCartImage from '@icons/bt_added_to_cart.svg';
import Image from 'next/image';
import styles from '@styles/ProductItem.module.scss';

import defaultImage from '@logos/default-product-image.png';

const ProductItem = ({ product }) => {
  const { state, addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    console.log('in cart: ', state.cart.includes(item));
    addToCart(item);
  };

  const imgProduct = product.images[0].includes('http') ? product.images[0] : defaultImage;

  return (
    <div className={styles.ProductItem}>
      <Image width={'100%'} height={'100%'} src={imgProduct} alt={product.title} layout="responsive" />
      <div className={styles['product-info']}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <button className={(styles['more-clickable-area'], styles.ButtonPlain)} onClick={() => handleClick(product)}>
          {state.cart.includes(product) ? (
            <Image width={35} height={35} className={(styles.disabled, styles['add-to-cart-btn'], styles.ButtonPlain)} src={addedToCartImage} alt="added to cart" layout="fixed" />
          ) : (
            <Image width={35} height={35} className={((styles['add-to-cart-btn'], styles.pointer), styles.ButtonPlain)} src={addToCartImage} alt="add to cart" layout="fixed" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
