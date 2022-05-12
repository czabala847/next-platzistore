import React from 'react';
import styles from '@styles/Order.module.scss';
import Image from 'next/image';
import iconArrow from '@icons/icon_close.png';

const Order = () => {
  return (
    <div className={styles.Order}>
      <p>
        <span>03.25.21</span>
        <span>6 articles</span>
      </p>
      <p>$560.00</p>
      <Image width={30} height={30} src={iconArrow} alt="arrow" />
    </div>
  );
};

export default Order;
