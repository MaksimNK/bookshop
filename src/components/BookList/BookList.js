import React from "react";
import { BookItem } from "../BookItem/BookItem.js";
import styles from './BookList.module.css';

export const BookList = ({ books, onFav, onBuy }) => {

    if (!Array.isArray(books) || books.length === 0) {
        return <p className={styles.error}>No books found for this category.</p>;
    }
    
    return (
        <div className={styles.bookList}>
            {books.map((book, index) => (
                <BookItem 
                    key={book.id}
                    book={book}
                    onFav={() => onFav(book.id)}
                    onBuy={() => onBuy(book.id)}
                    isEven={index % 2 === 0}
                />
            ))}
        </div>
    );
};
