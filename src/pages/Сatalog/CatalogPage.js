import React, {useEffect, useState} from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { CatalogList } from "../../components/CatalogList/CatalogList";

import styles from './Catalog.module.css';
import { AuthorList } from "../../components/AuthorList/AuthorList";
import { useDispatch } from "react-redux";
import { fetchCategories } from "../../features/categories/categoriesSlice";
import { fetchPublishings } from "../../features/publishings/publishingsSlice";
import { useSelector } from "react-redux";

export const CatalogPage = () => {

    const dispatch = useDispatch();

    const categories = useSelector((state) => state.categories.items);
    const publishings = useSelector((state) => state.publishings.items);

    const colors = [
        { id: 1, hex: "#6CB4B9" },
        { id: 2, hex: "#DCA6BD80" },
    ];

    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchPublishings());
      }, []);

    const authors = [
        { id: 1, image: "/image/authors/1.png", name: "Вирджиния Вулф" },
        { id: 2, image: "/image/authors/2.png", name: "Маргарет Этвуд" },
        { id: 3, image: "/image/authors/3.png", name: "Шарлотта Бронте" },
        { id: 4, image: "/image/authors/1.png", name: "Вирджиния Вулф" },
        { id: 5, image: "/image/authors/2.png", name: "Маргарет Этвуд" },
        { id: 6, image: "/image/authors/3.png", name: "Шарлотта Бронте" },
    ];
  
    return (
        <div>
            <Header />

            <div className={styles.section}>
            <h3 className={styles.pageTitle}>Каталог</h3>
            
                <h4 className={styles.sectionTitle}>Категории</h4>
                <CatalogList list={categories} color={colors[0]} type="category" />
            </div>

            <div className={styles.section}>
                <h4 className={styles.sectionTitle}>Издательства(серии)</h4>
                <CatalogList list={publishings} color={colors[1]} type="publishing" />
            </div>

            <div className={styles.section}>
                <h4 className={styles.sectionTitle}>Авторы</h4>
                <AuthorList authors={authors} />
            </div>

            <Footer />
        </div>
    );
};
