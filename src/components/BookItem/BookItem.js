import React from "react";
import styles from './BookItem.module.css';

export const BookItem = ({ book, onFav, onBuy, isEven }) => {
    return (
        <div className={`${styles.bookitem} ${isEven ? styles.even : styles.odd}`}>
            <img src={book.image} alt={book.title} className={styles.image} />
            <h3 className={styles.title}>{book.title}</h3>
            <h4 className={styles.author}>{book.author}</h4>
            <p className={styles.price}>${book.price}</p>
            <button onClick={onFav} className={styles.button}>Fav</button>
            <button onClick={onBuy} className={styles.button}>Buy</button>
        </div>
    );
};
