import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export const Header = () => {
    return (
        <header className={styles.header}>
            {/* Top navigation */}
            <nav className={styles.navbar}>
                <ul className={styles.navbarList}>
                    <li><Link to="/">Logo</Link></li>
                    <li><Link to="/catalog">Каталог</Link></li>
                    <li><Link to="/delivery">Доставка и оплата</Link></li>
                    <li><Link to="/about">О нас</Link></li>
                </ul>
            </nav>

            {/* Right-side icons */}
            <nav>
                <ul className={styles.navbarIconList}>
                    <li><Link to="/search">Search</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/basket">Basket</Link></li>
                    <li><Link to="/favorites">Favorites</Link></li>
                </ul>
            </nav>
        </header>
    );
};
