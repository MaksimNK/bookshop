import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { BookList } from "../../components/BookList/BookList";
import { fetchBooksPublishing } from "../../features/book/bookSlice";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import styles from './PublishingPage.module.css';
import { Filter } from "../../components/Filter/Filter";

export const PublishingPage = (props) => {
    const { publishing } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { books, status, error } = useSelector((state) => state.books);

    const [filteredBooks, setFilteredBooks] = useState(books);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        dispatch(fetchBooksPublishing(publishing));
        console.log('Books in PublishingPage:', books);
    }, [publishing, dispatch]);

    useEffect(() => {
        setFilteredBooks(books);
    }, [books]);

    const handleFilterChange = (filter) => {
        setFilter(filter);
    
        let filtered = [...books]; 

        if (filter === 'author') {
            filtered = filtered.filter(book => book.author);
        } else if (filter === 'title') {
            filtered = filtered.sort((a, b) => a.title.localeCompare(b.title));
        } else if (filter === 'price-asc') {
            filtered = filtered.sort((a, b) => a.price - b.price);
        }
    
        setFilteredBooks(filtered);
    };

    if (status === 'loading') return <p className={styles.loading}>Loading books...</p>;
    if (status === 'failed') navigate('/page-not-found');

    return (
        <>
            <Header />
            <div className={styles.publishingPage}>
                <h1>{publishing} Books</h1>

                {/* Add the Filter component */}
                <Filter onFilterChange={handleFilterChange} />

                <div className={styles.bookListContainer}>
                    <BookList books={filteredBooks} />
                </div>
            </div>
            <Footer />
        </>
    );
};
