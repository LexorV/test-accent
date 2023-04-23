import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from '../card/card';

import styles from './main-page.module.css';
import { BasketIcon } from '../ui/icons/icons';
import { BrandsFilter } from '../ui/brandsFilter/brandsFilter';

export const MainPage = () => {
  const { products } = useSelector((state) => state.main);
  console.log(products[0]);
  return (
    <main className={styles.main}>
      <div className={styles.main_box}>
       <BrandsFilter />
      <div className={styles.product_box}>
      <div className={styles.basket_panel} ><BasketIcon count={1} /></div>
      <ul className={styles.card_list }>
      {products.map((el) => (
       <Card data={el} key={el.id} />))
      }
      </ul>
      </div>
      </div>

    </main>
  );
};
export default MainPage;
