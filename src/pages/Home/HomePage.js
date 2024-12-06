import React from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { BookListSwiper } from "../../components/BookListSwiper/BookListSwiper";
import styles from './Home.module.css';
import { useNavigate } from "react-router-dom";

export const HomePage = (props) => {

    const navigate = useNavigate();

    const books = [
        { id: 1, image: "/image/home/header.png", title: "На маяк", author: "Вирджиния Вулф", price: "15 Br" },
        { id: 2, image: "/image/home/header.png", title: "Пробуждение", author: "Кейт Шопен", price: "15 Br" },
        { id: 3, image: "/image/home/header.png", title: "Эмма", author: "Джейн Остин", price: "10 Br" },
        { id: 4, image: "/image/home/header.png", title: "Рассказ служанки", author: "Маргарет Этвуд", price: "25 Br" },
        { id: 5, image: "/image/home/header.png", title: "На маяк", author: "Вирджиния Вулф", price: "15 Br" },
        { id: 6, image: "/image/home/header.png", title: "Пробуждение", author: "Кейт Шопен", price: "15 Br" },
        { id: 7, image: "/image/home/header.png", title: "Эмма", author: "Джейн Остин", price: "10 Br" },
        { id: 8, image: "/image/home/header.png", title: "Рассказ служанки", author: "Маргарет Этвуд", price: "25 Br" },
    ];
    
    const onBtnClick = () => {
        navigate('/catalog');
        console.log(123);
    }

    return (
       <div>
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
            <Footer />
       </div>
    );
};
