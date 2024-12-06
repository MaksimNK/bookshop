import React from "react";
import { Link } from "react-router-dom";
import styles from './CatalogItem.module.css';

export const CatalogItem = ({item, color, type}) => {



    const linkPath = 
        type === 'category' && item.category 
            ? `/category/${item.category}` 
            : type === 'publishing' && item.publishing 
            ? `/publishing/${item.publishing}` 
            : '#';

    if (!item.category && !item.publishing) {
        console.warn("Item is missing a required property:", item);
    }


    return (
        <Link to={linkPath} className={styles.link}>
            <div className={styles.item} style={{ '--item-bg': color.hex }}>
                <img src={item.image} alt={item.title} />
                <h6>{item.title}</h6>
            </div>
        </Link>
    );

}