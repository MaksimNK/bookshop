import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { BookList } from "../../components/BookList/BookList";
import { fetchBooksCategory } from "../../features/book/bookSlice";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import styles from './CategoryPage.module.css';
import { Filter } from "../../components/Filter/Filter";

export const CategoryPage = () => {
    const { category } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { books, status, error } = useSelector((state) => state.books);

    const [filteredBooks, setFilteredBooks] = useState(books);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        dispatch(fetchBooksCategory(category));
    }, [category, dispatch]);

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
            <div className={styles.categoryPage}>
                <h1>{category}</h1>

                <Filter onFilterChange={handleFilterChange} /> {/* Add the Filter component */}

                <div className={styles.bookListContainer}>
                    <BookList books={filteredBooks} />
                </div>
            </div>
            <Footer />
        </>
    );
};
