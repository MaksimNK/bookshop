import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CatalogItem } from "../CatalogItem/CatalogItem";
import styles from './CatalogList.module.css'

export const CatalogList = ({list, color, type}) => {

    if (!list || list.length === 0) {
        return <p className={styles.noBooks}>No item available</p>;
    }

    return (
        <div className={styles.list}>
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
                {console.log(list)}
                {list.map((item, index) => (
                    <SwiperSlide key={item.id}>
                        <CatalogItem
                            item={item}
                            color={color}
                            type={type}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}