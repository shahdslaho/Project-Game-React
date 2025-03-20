import { useState } from "react";
import styles from "../../src/assets/styles/PlatformSelector.module.css";

const SortSelector = ({ onSelectSortOrder, selectSortOrder }) => {
    const [isOpen, setIsOpen] = useState(false);

    const sortOrders = [
        { value: "", label: "Relevance" },
        { value: "-added", label: "Date added" },
        { value: "name", label: "Name" },
        { value: "-release", label: "Release date" },
        { value: "-metacritic", label: "Popularity" },
        { value: "-rating", label: "Average rating" },
    ];

    const selectedSortLabel = sortOrders.find((order) => order.value === selectSortOrder)?.label || "Relevance";

    return (
        <>
        <div className={styles.container}>
        <button
                id="sortDropdownButton"
                onClick={() => setIsOpen(!isOpen)}
                className={styles.button}
                type="button"
            >
                Order by: {selectedSortLabel}
                <svg className={styles.icon} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
            </button>
            {isOpen && (
                <div id="sortDropdown" className={styles.dropdown}>
                    <ul aria-labelledby="sortDropdownButton">
                        {sortOrders.map((order) => (
                            <li
                                className={styles.item}
                                key={order.value}
                                onClick={() => {
                                    onSelectSortOrder(order.value);
                                    setIsOpen(false);
                                }}
                            >
                                {order.label}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

        </div>
          
        </>
    );
};

export default SortSelector;
