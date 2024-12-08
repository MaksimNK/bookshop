import React from "react";
import styles from './Footer.module.css';
import { Logo } from "../UI/Logo/Logo";

export const Footer = (props) => {
    return (
       <footer className={styles.footer}>
            <div className={styles.logo}>
                <Logo />
            <h3>+3752912345678</h3>
            </div>

        <div className={styles.content}>
            <div className={styles.leftColumn}>
                <ul>
                    <li><h3>О нас</h3></li>
                    <li><h3>Доставка и оплата</h3></li>
                    <li><h3>Всегда на связи</h3></li>
                </ul>
                <ul>
                    <li><h3>Политика конфиденциальности</h3></li>
                    <li><h3>Способы оплаты</h3></li>
                    <li><h3>Условия возврата</h3></li>
                   
                </ul>
            </div>

            <div className={styles.rightColumn}>
                <p>ООО Бук</p>
                <p>УНП: 123456789</p>
                <p>Регистрация: Минск, 2023</p>
                <p>Режим работы: Пн-Пт, 9:00-18:00</p>
            </div>

        </div>
       </footer>
    );
}
