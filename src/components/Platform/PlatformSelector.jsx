/* eslint-disable react/prop-types */
import { useState } from "react";
import usePlatform from "../../hooks/usePlatform";
import styles from "../../../src/assets/styles/PlatformSelector.module.css";

const PlatformSelector = ({ onSelectPlatform, selectPlatform }) => {
  const { data, error } = usePlatform();
  const [isOpen, setIsOpen] = useState(false);

  if (error) return null;

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectPlatform?.name || "Platforms"}
        <svg
          className={styles.icon}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          <ul>
            {data?.results?.map((platform) => (
              <li
                className={styles.item}
                key={platform.id}
                onClick={() => {
                  onSelectPlatform(platform);
                  setIsOpen(false); // إغلاق القائمة عند اختيار منصة
                }}
              >
                {platform.slug}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PlatformSelector;
