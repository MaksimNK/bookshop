import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import styles from "./SearchPage.module.css";

import { fetchBooks, searchBooksByTitle } from "../../features/book/bookSlice";
import { BookList } from "../../components/BookList/BookList";
export const SearchPage = () => {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");
  
  const { books, status, error } = useSelector((state) => state.books);

 
  useEffect(() => {
    if (searchQuery.trim()) {
      dispatch(searchBooksByTitle(searchQuery));
    }
  }, [searchQuery, dispatch]);

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Header />
      
      <div className={styles.searchContainer}>
        <h2>Поиск книг</h2>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Введите название книги"
            className={styles.searchInput}
          />
        
        {status === "loading" && <p>Загрузка...</p>}
        
        {status === "failed" && <p>Error: {error}</p>}
        
        <BookList books={books} />

      </div>

      <Footer />
    </div>
  );
};
