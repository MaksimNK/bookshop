import React, { useState } from "react";
import styles from './Filter.module.css';

export const Filter = ({ onFilterChange }) => {
    const [selectedFilter, setSelectedFilter] = useState('all');

    const handleFilterChange = (e) => {
        const value = e.target.value;
        setSelectedFilter(value);
        onFilterChange(value);
    };

    return (
        <div className={styles.filterContainer}>
            <select
                value={selectedFilter}
                onChange={handleFilterChange}
                className={styles.filterSelect}
            >
                <option value="all">All</option>
                <option value="author">By Author</option>
                <option value="title">By Title</option>
                <option value="price-asc">Price</option>
            </select>
        </div>
    );
};
