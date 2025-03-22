/* eslint-disable react/prop-types */
// Game heading component
import styles from "../../assets/styles/gameHeading.module.css"
export const GameHeading = ({ selectGenre, selectPlatform }) => {
    const heading = `${selectGenre?.name || ""} ${selectPlatform?.name || ""} Games`;

    return <h1 className={styles.gradientText}>{heading}</h1>;
};
