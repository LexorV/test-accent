import React from "react";
import { Link } from "react-router-dom";
import {Card} from "../card/card"

import styles from "./main-page.module.css";
import brands from "../constans/mockData/brands.json"
import product from "../constans/mockData/products.json"



export const MainPage = () => {
  console.log(product[0])
  return (
    <main className={styles.main}>
      <ul className={styles.card_list }>
      {product.map((el) => {
       return (
       <Card data={el} key={el.id} />)
      })
      }
      </ul>
    
    </main>
  );
};
