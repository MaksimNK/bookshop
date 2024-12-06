import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BookList } from "../../components/BookList/BookList";
import { fetchBooksPublishing } from "../../features/book/bookSlice";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import styles from './PublishingPage.module.css';

export const PublishingPage = (props) => {
    const { publishing } = useParams();
    const dispatch = useDispatch();

    const { books, status, error } = useSelector((state) => state.books);

    useEffect(() => {
        dispatch(fetchBooksPublishing(publishing));
        console.log('Books in PublishingPage:', books);
    }, [publishing, dispatch]);

    if (status === 'loading') return <p className={styles.loading}>Loading books...</p>;
    if (status === 'failed') return <p className={styles.error}>Error: {error}</p>;

    return (
        <>
            <Header />
            <div className={styles.publishingPage}>
                <h1>{publishing} Books</h1>
                <div className={styles.bookListContainer}>
                    <BookList books={books} />
                </div>
            </div>
            <Footer />
        </>
    );
};
