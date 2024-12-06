import React from "react";
import { useSelector } from "react-redux";
import { BookItem } from "../../components/BookItem/BookItem";
import styles from './FavoritesPage.module.css';
import { BookList } from "../../components/BookList/BookList";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

export const FavoritesPage = () => {
    const { favoriteBooks } = useSelector((state) => state.books);

    return (
        <>
        <Header />
        <div className={styles.favPage}>
            <h1>Favorites</h1>
            <div className={styles.bookList}>
                {favoriteBooks.length === 0 ? (
                    <p>No books in your favorites yet.</p>
                ) : (
                    <BookList books={favoriteBooks}/>
                )}
            </div>
        </div>
        <Footer />
        </>
    );
};
