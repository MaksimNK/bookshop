import React from "react";
import styles from './Logo.module.css'

export const Logo = (props) => {
    return (
       <div>
        <img src="image/logo.png" className={styles.image}/>
        <h3 className={styles.name}>SAOIRSE BOOKS</h3>
       </div>
    );
}