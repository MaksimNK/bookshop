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
    { id: 1, image: "/image/artist.png", name: "Вирджиния Вулф" },
    { id: 2, image: "/image/artist.png", name: "Маргарет Этвуд" },
    { id: 3, image: "/image/artist.png", name: "Шарлотта Бронте" },
    { id: 4, image: "/image/artist.png", name: "Рассказ служанки" },
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
            <h2>Новинки</h2>
            <BookListSwiper books={books} />
            <h2>Наши вдохновительницы</h2>
            <div className={styles.section}>
                <h4 className={styles.sectionTitle}>Авторы</h4>
                <AuthorList authors={authors} />
            </div>

            <Footer />
       </div>
    );
};
