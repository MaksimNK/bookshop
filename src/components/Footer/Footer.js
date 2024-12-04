import React from "react";

import styles from './Footer.module.css'
import { Logo } from "../UI/Logo/Logo";

export const Footer = (props) => {
    return (
       <footer className={styles.footer}>
        <div className={styles.content}>
            <Logo />
            <h3>Контакты</h3>
        </div>
       </footer>
    );
}