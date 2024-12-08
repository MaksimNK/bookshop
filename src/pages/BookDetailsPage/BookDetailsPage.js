import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooksbyId } from "../../features/book/bookSlice";
import styles from "./BookDetailsPage.module.css";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

export const BookDetailsPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { book, status, error } = useSelector((state) => state.books);

    useEffect(() => {
        dispatch(fetchBooksbyId(id));
    }, [dispatch, id]);

    if (status === "loading") {
        return <p>Loading...</p>;
    }

    if (status === "failed") {
        const errorMessage = error?.message || JSON.stringify(error);
        navigate('/page-not-found');
    }

    if (!book) {
        return <p>Book not found</p>;
    }

    return (
        <>
        <Header />
        <div className={styles.container}>
         <div className={styles.bookContent}>
            <div className={styles.bookHeader}>
                <h1 className={styles.bookTitle}>{book.title}, {book.author}</h1>
            </div>
            
            <div className={styles.bookMain}>
                <div className={styles.bookCover}>
                    <img src={book.image} alt="Book cover" />
                </div>

                <div className={styles.bookDetailsCover}>
                    <h3>Характеристики</h3>
                    <div className={styles.bookDetails}>
                    <ul className={styles.detailsList}>
                        <li>Серия: {book.series}</li>
                        <li>Издательство: {book.publisher}</li>
                        <li>ISBN: {book.isbn}</li>
                        <li>Age Limit: {book.ageLimit}</li>
                        <li>Название на языке оригинала: {book.originalTitle}</li>
                        <li>Обложка: {book.coverType}</li>
                    </ul>
                    <ul className={styles.detailsList}>
                        <li>Кол-во страниц: {book.pages}</li>
                        <li>Вес: {book.weight}</li>
                        <li>Толщина: {book.thickness}</li>
                        <li>Формат:{book.format}</li>
                        <li>Материал бумаги:{book.paperMaterial}</li>
                        <li>Время прочтения: {book.readingTime}</li>
                    </ul>
                    </div>
                </div>
            </div>
         </div>


        <div className={styles.aboutCover}>
            <div className={styles.about}>
                <h2>О книге</h2>
                <p className={styles.description}>{book.description}</p>
            </div>
            <img src="/image/bookItemDetail/1.png"></img>
        </div>
        </div>
        <Footer />
        </>
    );
};
