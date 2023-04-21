import React from "react";
import { Link } from "react-router-dom";
import {Card} from "../card/card"

import styles from "./main-page.module.css";
import product from "../constans/mockData/products.json"
import { BasketIcon } from "../ui/icons/icons"
import { BrandsFilter } from '../ui/brandsFilter/brandsFilter'



export const MainPage = () => {
  console.log(product[0])
  return (
    <main className={styles.main}>
      <div className={styles.main_box}>
       <BrandsFilter />
      <div className={styles.product_box}>
      <div className={styles.basket_panel} ><BasketIcon count={1} /></div>
      <ul className={styles.card_list }>
      {product.map((el) => {
       return (
       <Card data={el} key={el.id} />)
      })
      }
      </ul>
      </div>
      </div>
    
    </main>
  );
};
