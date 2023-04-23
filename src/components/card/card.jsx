import React, { useState } from 'react';

import styles from './card.module.css';

export const Card = ({ data }) => {
  const [image, setImage] = useState('');
  (function () {
    import(
      `../../images/${data.id}.png`
    ).then((picture) => setImage(picture.default));
  }());
  return (
        <li className={styles.main}>
        <h3 className={styles.title}>{data.title}</h3>
            <img
            className={styles.picture}
            alt={data.title}
            src={image}></img>
                 <p className={styles.text}> Брэнд: {data.brand}</p>
                <p className={styles.text}>Цена: {data.regular_price.value}
                {data.regular_price.currency}</p>
                <button className={styles.button}>Добавить в корзину</button>
        </li>
  );
};
export default Card;
