import React from "react";

import styles from './Footer.module.css'

export const Footer = (props) => {
    return (
       <footer className={styles.footer}>
        <div className={styles.content}>
            <div>Logo</div>
            <h3>Контакты</h3>
        </div>
       </footer>
    );
}