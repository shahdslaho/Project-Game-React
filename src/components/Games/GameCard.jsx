/* eslint-disable react/prop-types */
import getCroppedImageUrl from "../../services/image-url";
import CriticScore from "../CriticScore";
import { Emoji } from "../Emoji";
import PlatformIconList from "../Platform/PlatformIconList";
import styles from "../../../src/assets/styles/gameCard.module.css";  
import { Link } from 'react-router-dom';

// Game card component
const GameCard = ({ game }) => {
  return (
    <Link to={`/game/${game.id}`} className="">
      <div className={styles.card}>
        <div>
          <img
            className={styles.image}
            src={getCroppedImageUrl(game.background_image)}
            alt={game.name}
          />
        </div>
        <div className={styles.details}>
          <div className={styles.top}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
          </div>
          <div className={styles.score}>
            <CriticScore score={game.metacritic} />
          </div>
        </div>
        <div className={styles.title}>
          <h5>
            {game.name} <Emoji rating={game.rating_top} />
          </h5>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
