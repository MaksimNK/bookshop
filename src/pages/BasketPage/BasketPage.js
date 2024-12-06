import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromBasket } from "../../features/book/bookSlice"; 
import { BookItem } from "../../components/BookItem/BookItem";
import styles from './BasketPage.module.css';
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { BookList } from "../../components/BookList/BookList";

export const BasketPage = () => {
    const dispatch = useDispatch();
    const { basketBooks } = useSelector((state) => state.books);
    const handleRemoveFromBasket = (bookId) => {
        dispatch(removeFromBasket(bookId));
    };

    return (
        <>
        <Header />
        <div className={styles.basketPage}>
            <h1>Your Basket</h1>
            <div className={styles.bookList}>
                {basketBooks.length === 0 ? (
                    <p>No books in your basket yet.</p>
                ) : (
                   <BookList books={basketBooks}/>
                )}
            </div>
        </div>
        <Footer />
        </>
    );
};
