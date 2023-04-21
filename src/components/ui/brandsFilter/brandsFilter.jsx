import React from "react"

import styles from "./brandsFilter.module.css"
import brands from "../../constans/mockData/brands.json"

export const BrandsFilter = () => {

    return (
        <fieldset className={styles.main}>
            <h3>Бренды</h3>
            {brands.map((item) => {
                return(
                    <div>
            <input className={styles.checkbox} type="checkbox" id={item.title} name={item.title} value="K" />
            <label for={item.title}>{item.title}</label>
                    </div>
                )
            })}
        </fieldset>
    )
}