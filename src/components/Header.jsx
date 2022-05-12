import React, { useContext } from 'react';
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import AppContext from '@context/AppContext';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@styles/Header.module.scss';

const Header = () => {
  const { state, toggleOrder, toggleMenu } = useContext(AppContext);

  return (
    <>
      <nav className={styles.Nav}>
        <Image width={25} height={60} src={menu} alt="menu" className={styles.menu} />
        <div className={styles['navbar-left']}>
          <Link href="/" passHref>
            <a href="replace">
              <Image width={100} height={60} src={logo} alt="logo" className={styles['nav-logo']} />
            </a>
          </Link>
          <ul>
            <li>
              <Link href="/" passHref>
                <a href="replace">All</a>
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                <a href="replace">Clothes</a>
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                <a href="replace">Electronics</a>
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                <a href="replace">Furnitures</a>
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                <a href="replace">Toys</a>
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                <a href="replace">Others</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles['navbar-right']}>
          <ul>
            <button className={(styles['more-clickable-area'], styles.pointer, styles.ButtonPlain)} onClick={() => toggleMenu()}>
              platzi@example.com
            </button>
            <button className={(styles['navbar-shopping-cart'], styles.ButtonPlain)} onClick={() => toggleOrder()}>
              <Image width={25} height={25} className={`${styles['more-clickable-area']} ${styles.pointer}`} src={shoppingCart} alt="shopping cart" />
              {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
            </button>
          </ul>
        </div>
        {state.menuIsOpen && <Menu />}
      </nav>
      {state.orderIsOpen && <MyOrder />}
    </>
  );
};

export default Header;
