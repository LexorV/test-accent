import React, {useState} from "react"

import styles from "./card.module.css";

export const Card = ({data}) => {
    const [image, setImage] = useState("");
    (function() {
        import(
          `../../images/${data.id}.png`
        ).then((image) => setImage(image.default));
      })();
    return (
        <li className={styles.main}> 
        <h3>{data.title}</h3>
            <img
            className={styles.picture} 
            alt={data.title}
            src={image}></img>
                 <p> Брэнд: {data.brand}</p>
                <p>Цена:{data.regular_price.value} {data.regular_price.currency}</p>
        </li>
    )
}