import { useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import styles from "../../../src/assets/styles/ThemeToggle.module.css";
import useThemeStore from "../../store/themeStore";

// Theme toggle component
const ThemeToggle = () => {
    const { theme , toggleTheme } = useThemeStore(); // Access theme and toggle function from store

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme); // Set theme attribute on document
        localStorage.setItem("theme", theme); // Save theme to local storage
    }, [theme]);

    return (
        <label className={styles.toggleContainer}>
            <input 
                type="checkbox" 
                className={styles.hiddenCheckbox} 
                onChange={toggleTheme} 
                checked={theme === "dark"} 
                aria-label="Toggle theme mode"
            />

            <div className={`${styles.toggleSwitch} ${theme === "dark" ? styles.darkMode : styles.lightMode}`}>
                <div className={styles.toggleThumb}>
                    {theme === "dark" ? <FaMoon className={styles.moonIcon} /> : <FaSun className={styles.sunIcon} />} 
                </div>
            </div>
        </label>
    );
};

export default ThemeToggle;
