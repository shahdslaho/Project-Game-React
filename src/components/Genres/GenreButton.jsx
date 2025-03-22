/* eslint-disable react/prop-types */
import sidBar from "../../assets/styles/SideBar.module.css";
// Game genre button component 
const GenreButton = ({ genre, onSelectGenre }) => {
  return (
    <button
      type="button"
      onClick={() => onSelectGenre(genre)}
      className={sidBar.button}
    >
      <img
        src={genre.image_background}
        alt={genre.name}
        className={sidBar.img}
      />
      <span className={sidBar.text}>
        {genre.name}
      </span>
    </button>
  );
};

export default GenreButton;
