import React from "react";
import { Link } from "react-router-dom";
import styles from './BookItem.module.css';
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, addToBasket } from "../../features/book/bookSlice";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import { FaBookmark, FaShoppingCart } from "react-icons/fa";

export const BookItem = ({ book, isEven }) => {
  const dispatch = useDispatch();
  const { favoriteBooks, basketBooks } = useSelector((state) => state.books);

  const isFavorited = favoriteBooks.some(favBook => favBook.id === book.id);
  const isInBasket = basketBooks.some(basketBook => basketBook.id === book.id);

  const handleAddToFavorites = (e) => {
    e.preventDefault();
    dispatch(addToFavorites(book));
  };

  const handleAddToBasket = (e) => {
    e.preventDefault();
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
          onClick={handleAddToFavorites}
          className={`${styles.button} ${isFavorited ? styles.active : ''}`}
        >
          {isFavorited ? <FaBookmark /> : <CiBookmark />}
        </button>
        <button
          onClick={handleAddToBasket}
          className={`${styles.button} ${isInBasket ? styles.active : ''}`}
        >
          {isInBasket ? <FaShoppingCart /> : <MdOutlineShoppingCart />}
        </button>
      </div>
    </Link>
  );
};
