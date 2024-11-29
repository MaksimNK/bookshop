import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // Import the modules from the correct path
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./BookList.module.css";
import { BookItem } from "../BookItem/BookItem";

export const BookList = ({ books }) => {
    return (
        <div className={styles.booklist}>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={20}
                slidesPerView={3}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {books.map((book, index) => (
                    <SwiperSlide key={book.id}>
                        <BookItem
                            book={book}
                            isEven={index % 2 === 0}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
