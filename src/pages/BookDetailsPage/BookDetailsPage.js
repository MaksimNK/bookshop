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
                    <img src="/image/artist.png" alt="Book cover" />
                </div>

                <div className={styles.bookDetails}>
                    <ul className={styles.detailsList}>
                        <li><strong>Series:</strong> {book.series}</li>
                        <li><strong>Publisher:</strong> {book.publisher}</li>
                        <li><strong>ISBN:</strong> {book.isbn}</li>
                        <li><strong>Age Limit:</strong> {book.ageLimit}</li>
                        <li><strong>Original Title:</strong> {book.originalTitle}</li>
                        <li><strong>Cover Type:</strong> {book.coverType}</li>
                        <li><strong>Pages:</strong> {book.pages}</li>
                        <li><strong>Weight:</strong> {book.weight}</li>
                        <li><strong>Thickness:</strong> {book.thickness}</li>
                        <li><strong>Format:</strong> {book.format}</li>
                        <li><strong>Paper Material:</strong> {book.paperMaterial}</li>
                        <li><strong>Reading Time:</strong> {book.readingTime}</li>
                    </ul>
                </div>
            </div>
         </div>

            <div className={styles.about}>
                <h2>О книге</h2>
                <p className={styles.description}>{book.description}</p>
            </div>
        </div>
        <Footer />
        </>
    );
};
