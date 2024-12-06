import React from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { CatalogList } from "../../components/CatalogList/CatalogList";

import styles from './Catalog.module.css';
import { AuthorList } from "../../components/AuthorList/AuthorList";

export const CatalogPage = () => {
    const colors = [
        { id: 1, hex: "#6CB4B9" },
        { id: 2, hex: "#DCA6BD80" },
    ];

    const category = [
        { id: 1, image: "/image/home/catalog.png", title: "Художественная литература", category: "artistic" },
        { id: 2, image: "/image/home/header.png", title: "Биографии и мемуары", category: "художественная литература" },
        { id: 3, image: "/image/home/header.png", title: "Детская литература" },
        { id: 4, image: "/image/home/header.png", title: "Рассказ служанки" },
    ];

    const publishing = [
        { id: 1, image: "/image/home/header.png", title: "Магистраль(Эксмо)", publishing: "magistr" },
        { id: 2, image: "/image/home/header.png", title: "Большие книги.иностранка" },
        { id: 3, image: "/image/home/header.png", title: "Яркие страницы" },
        { id: 4, image: "/image/home/header.png", title: "Рассказ служанки" },
    ];

    const authors = [
        { id: 1, image: "/image/artist.png", name: "Вирджиния Вулф" },
        { id: 2, image: "/image/artist.png", name: "Маргарет Этвуд" },
        { id: 3, image: "/image/artist.png", name: "Шарлотта Бронте" },
        { id: 4, image: "/image/artist.png", name: "Рассказ служанки" },
    ];

    return (
        <div>
            <Header />

            <div className={styles.section}>
            <h3 className={styles.pageTitle}>Каталог</h3>
            
                <h4 className={styles.sectionTitle}>Категории</h4>
                <CatalogList list={category} color={colors[0]} type="category" />
            </div>

            <div className={styles.section}>
                <h4 className={styles.sectionTitle}>Издательства(серии)</h4>
                <CatalogList list={publishing} color={colors[1]} type="publishing" />
            </div>

            <div className={styles.section}>
                <h4 className={styles.sectionTitle}>Авторы</h4>
                <AuthorList authors={authors} />
            </div>

            <Footer />
        </div>
    );
};
