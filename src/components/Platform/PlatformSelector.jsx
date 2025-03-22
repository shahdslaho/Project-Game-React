/* eslint-disable react/prop-types */
import { useState } from "react";
import usePlatform from "../../hooks/usePlatform";
import styles from "../../../src/assets/styles/PlatformSelector.module.css";
import { useGameContext } from "../../context/GameContext"; 

// Platform selector component
const PlatformSelector = () => {
  const { selectPlatform, setPlatform } = useGameContext(); 
  const { data, error } = usePlatform();
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  if (error) return null;  // Return null if there is an error

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
                  setPlatform(platform);  // Use game context to update platform
                  setIsOpen(false); 
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
