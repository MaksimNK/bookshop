import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./AuthorList.module.css";
import { AuthorItem } from "../AuthorItem/AuthorItem";

export const AuthorList = ({ authors }) => {
    if (!authors || authors.length === 0) {
        return <p className={styles.noAuthor}>No authors available</p>;
    }

    return (
        <div className={styles.authorlist}>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={10}
                slidesPerView={3}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {authors.map((author) => (
                    <SwiperSlide key={author.id}>
                        <AuthorItem author={author} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
