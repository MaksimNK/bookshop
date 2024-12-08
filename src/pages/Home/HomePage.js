import React, { useEffect } from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { BookListSwiper } from "../../components/BookListSwiper/BookListSwiper";
import styles from './Home.module.css';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchLastestBook } from "../../features/book/bookSlice";
import {AuthorList} from '../../components/AuthorList/AuthorList'


export const HomePage = (props) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { books }  = useSelector((state) => state.books);
    useEffect(() => {
        dispatch(fetchLastestBook());
    },[dispatch])
    
    const onBtnClick = () => {
        navigate('/catalog');
    }


    const authors = [
        { id: 1, image: "/image/authors/1.png", name: "Вирджиния Вулф", years: "1882-1941" },
        { id: 2, image: "/image/authors/2.png", name: "Маргарет Этвуд", years: "1939" },
        { id: 3, image: "/image/authors/3.png", name: "Шарлотта Бронте", years: "1816-1855" },
    ];

    return (
       <div className={styles.home}>
            <Header  style={{ position: 'relative', zIndex: 100 }} />
            <div className={styles.hero}>
                <img src="image/home/header.png" className={styles.image} alt="header" />
                <div>
                    <h1>Чтение - это свобода</h1>
                    <p>"saoirse" означает "свобода", "независимость" или "освобождение".</p>
                    <button onClick={onBtnClick}>ПЕРЕЙТИ В КАТАЛОГ</button>
                </div>
            </div>
            <div className={styles.spacer}></div>
            <h2>Наши вдохновительницы</h2>
            <div className={styles.authorsGrid}>
                {authors.map((author) => (
                    <div key={author.id} className={styles.authorBlock}>
                        <img
                            src={author.image}
                            alt={author.name}
                            className={styles.authorImage}
                        />
                        <p className={styles.authorName}>{author.name}</p>
                        <p className={styles.authorName}>{author.years}</p>
                    </div>
                ))}
            </div>
            <h2>Новинки</h2>
            <BookListSwiper books={books} />
            <Footer />
       </div>
    );
};
