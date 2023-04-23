import React from 'react';

import styles from './icons.module.css';
import basket from '../../../images/icons/basket-icon.svg';

export const BasketIcon = ({ count }) => (
        <div className={styles.icon_box}>
            <img className={styles.icon} src= {basket}/>
            <p className={styles.count}>{count}</p>
        </div>
);
export default BasketIcon;
