import React, { useState } from "react"
import styles from "./brandsFilter.module.css"
import brands from "../../constans/mockData/brands.json"

export const BrandsFilter = () => {
    const [checked, setChecked] = useState(true);
    const [arrBrands, setArrBrands] = useState(brands.map((brand => {  return {isCheked:false, ...brand}})))
    console.log(arrBrands)
    return (
        <fieldset className={styles.main}>
            <h3>Бренды</h3>
            {arrBrands.map((item) => {
                return(
                    <div>
            <input className={styles.checkbox}
              type="checkbox"
              id={item.title}
              name={item.title} 
              value={item.title} 
              defaultChecked={checked} 
            onChange={() => setChecked(!checked)} />
            <label for={item.title}>{item.title}</label>
                    </div>
                )
            })}
        </fieldset>
    )
}