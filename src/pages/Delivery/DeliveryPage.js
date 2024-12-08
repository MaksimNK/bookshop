import React from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import styles from './DeliveryPage.module.css';

export const DeliveryPage = () => {
    return (
        <div>
            <Header />
            <h1 className={styles.pageTitle}>Доставка и Оплата</h1>
            <div className={styles.hero}>
                <h3>Информация о доставке и оплате</h3>
                <div className={styles.inside}>
                <h4>Оплата:</h4>
                <p>
                    После оформления заказа оплата производится через интернет в режиме реального времени банковской картой VISA, MASTERCARD, Белкарт, ApplePay, Samsung Pay.
                    Оплата при получении возможна только при самовывозе наличными или банковской картой.
                </p>

                <h4>Способы доставки:</h4>
                <h4>1. Самостоятельно можно забрать в одном из наших MARKS - Бесплатно</h4>
                <p>пер. 5-й Калиновый, 24 <br /> - ул. Богдановича, 23 <br />(выбор при оформлении заказа)</p>
                <h4>2. Доставка курьером</h4>
                <p>Предварительно мы согласуем время доставки.</p>
                <p>Тарифы:</p>
                <ul>
                    <li>- по г. Минску внутри Второго кольца - 5 р.</li>
                    <li>- от Второго кольца - до МКАД - 8 р.</li>
                    <li>- за МКАД - 10 р.</li>
                </ul>

                <p>При покупке свыше 180 рублей доставим бесплатно.</p>
                <h4>3. Доставка почтой по Беларуси</h4>
                <p>Стоимость доставки рассчитаем в соответствии с тарифами на услуги Белпочты (https://belpost.by/Tarify2/TarifyRUPBelpochta/Tarifyyur/Tarifynauslugipochtovoysv0) и Европочты (https://evropochta.by/services/tariffs_ur/)</p>
                </div>


                <img src="/image/wave.png" alt="wave" />
            </div>
            <Footer />
        </div>
    );
};
