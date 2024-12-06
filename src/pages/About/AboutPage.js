import React from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

import styles from './About.module.css';
import { BookListSwiper } from "../../components/BookListSwiper/BookListSwiper";

export const AboutPage = () => {

    const books = [
        { id: 1, image: "/image/home/header.png", title: "На маяк", author: "Вирджиния Вулф", price: "15 Br" },
        { id: 2, image: "/image/home/header.png", title: "Пробуждение", author: "Кейт Шопен", price: "15 Br" },
    ];

    return (
        <div>
            <Header />
            <div>
            <h1 className={styles.about}>О Нас</h1>
                <div className={styles.imageGrid}>
                    <div className={styles.imageContainer}>
                        <img src="/image/container-2.png" className={styles.image} alt="Описание 1"/>
                        <div className={styles.text}>
                        Имя Сирша является ирландским и имеет гэльское происхождение. Оно имеет несколько значений и трактовок. В переводе с гэльского Сирша означает "свободная" или "свобода". Также оно может быть связано с ирландским словом "saoirse", которое означает "свобода", "независимость" или "освобождение".
                        </div>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src="/image/container.png" className={styles.image} alt="Описание 2"/>
                        <div className={styles.text}>
                        Люди с таким именем обычно обладают сильной волей, независимостью и стремлением к свободе. Они обычно очень решительны и уверены в своих действиях. Люди с именем Сирша также могут быть очень искренними и открытыми, что делает их привлекательными для других.
                        Люди с именем Сирша обычно являются творческими и имеют развитое воображение. Они могут проявлять интерес к искусству, музыке, литературе и другим формам самовыражения. Они стремятся к саморазвитию и постоянно ищут новые способы самовыражения.
                        </div>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src="/image/container.png" className={styles.image} alt="Описание 3"/>
                        <div className={styles.text}>
                        Именно такие люди работают тут и ждут своих единомышленников! 
Мы стремимся к свободе выбора! Не важно, что ты читаешь, важно, какие эмоции тебе это приносит!
Мы те, кто поддерживает женщин, которые обрели свободу от мужских псевдонимов и свободу писать замечательные книги!
                        </div>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src="/image/container-2.png" className={styles.image} alt="Описание 4"/>
                        <div className={styles.text}>
                        Чтение - это свобода?
                        Да! Ты выбираешь любую историю, погружаешься в нее, плывешь и познаешь новое. Представляешь свою жизнь любой и ,возможно, даже стремишься к понравившейся. Читать - это словно плыть в море, вокруг свобода, и ты то бушуешь, то спокоен.
                        </div>
                    </div>
                </div>
                <div className={styles.quotes}>
                    „Не нужно спешить. Не нужно блистать. Не нужно быть кем-то, кроме себя.“ — Вирджиния Вулф
                </div>
                <div className={styles.quotes}>
                „На протяжении большей части истории Анонимом была женщина.“ —  Вирджиния Вулф </div>
                <div className={styles.quotes}>
                „Мы думали, у нас такие серьезные проблемы. Откуда нам было знать, что мы счастливы? “ —  Маргарет Этвуд 
                </div>
                <div className={styles.recomendation}>
                    <h2>Наши рекомендации</h2>
                    <BookListSwiper books={books} className={styles.books}/>
                </div>
            </div>
            <Footer />
        </div>
    );
};
