import React from "react";
import { Link } from "react-router-dom";
import styles from './BookItem.module.css';
import { useDispatch } from "react-redux";
import { addToFavorites,  addToBasket} from "../../features/book/bookSlice";
import { MdOutlineShoppingCart } from "react-icons/md";

import { CiBookmark } from "react-icons/ci";


export const BookItem = ({ book, onFav, onBuy, isEven }) => {

    const dispatch = useDispatch();

    const handleAddToFavorites = () => {
        dispatch(addToFavorites(book)); 
    };

    const handleAddToBasket = () => {
        dispatch(addToBasket(book));
    };


    return (
        <Link to={`/book/${book.id}`} className={`${styles.bookitem} ${isEven ? styles.even : styles.odd}`}>
            <div>
                <img src={book.image} alt={book.title} className={styles.image} />
                <h3 className={styles.title}>{book.title}</h3>
                <h4 className={styles.author}>{book.author}</h4>
                <p className={styles.price}>{book.price}</p>
            </div>
            <div className={styles.buttoncontainer}>
                <button 
                    onClick={(e) => {
                        e.preventDefault();
                        handleAddToFavorites();
                    }} 
                    className={styles.button}
                >
                <CiBookmark />

                </button>
                <button 
                    onClick={(e) => {
                        e.preventDefault();
                        handleAddToBasket();
                    }} 
                    className={styles.button}
                >
                    <MdOutlineShoppingCart />
                </button>
            </div>
        </Link>
    );
};
