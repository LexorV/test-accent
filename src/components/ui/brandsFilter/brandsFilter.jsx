import React, { useState } from 'react';
import styles from './brandsFilter.module.css';
import brands from '../../constans/mockData/brands.json';

export const BrandsFilter = () => {
  const [checked, setChecked] = useState(true);
  const [arrBrands, setArrBrands] = useState(brands.map(((brand) => (
    { isCheked: false, ...brand }))));
  console.log(arrBrands);
  return (
        <fieldset className={styles.main}>
            <h3>Бренды</h3>
            {arrBrands.map((item) => (
                    <div key={item.id}>
            <input className={styles.checkbox}
              type="checkbox"
              id={item.title}
              name={item.title}
              value={item.title}
              defaultChecked={checked}
            onChange={() => setChecked(!checked)} />
            <label htmlFor={item.title}>{item.title}</label>
                    </div>
            ))}
        </fieldset>
  );
};
export default BrandsFilter;
