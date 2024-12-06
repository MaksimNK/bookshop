import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BookList } from "../../components/BookList/BookList";
import { fetchBooksCategory } from "../../features/book/bookSlice";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import styles from './CategoryPage.module.css';

export const CategoryPage = (props) => {
    const { category } = useParams();
    const dispatch = useDispatch();

    const { books, status, error } = useSelector((state) => state.books);

    useEffect(() => {
        dispatch(fetchBooksCategory(category));
        console.log(books);
    }, [category, dispatch]);

    if (status === 'loading') return <p className={styles.loading}>Loading books...</p>;
    if (status === 'failed') return (
        <p className={styles.error}>
            Error: {error.message || "An unexpected error occurred"}
        </p>
    );
    
    return (
        <>
            <Header />
            <div className={styles.categoryPage}>
                <h1>{category}</h1>
                <div className={styles.bookListContainer}>
                    <BookList books={books} />
                </div>
            </div>
            <Footer />
        </>
    );
};
