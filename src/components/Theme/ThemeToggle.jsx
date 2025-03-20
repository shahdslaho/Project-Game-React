import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import styles from "../../../src/assets/styles/ThemeToggle.module.css";

const ThemeToggle = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

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
