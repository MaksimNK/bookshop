import React from "react";
import styles from './AuthorItem.module.css';

export const AuthorItem = ({ author }) => {
    return (
        <div className={styles.author}>
            <div className={styles.imageContainer}>
                <img 
                    className={styles.image} 
                    src={author.image} 
                    alt={author.name} 
                />
                <div className={styles.name}>
                    {author.name} 
                </div>
            </div>
        </div>
    ); 
};
