import { useInView } from "react-intersection-observer"; // لمراقبة ظهور العناصر
import React, { useEffect } from "react"; 
import useGames from "../../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import styles from "../../../src/assets/styles/gameList.module.css";
import useSearchStore from "../../store/searchStore"; 

const GameList = ({
  selectGenre,
  selectPlatform,
  selectSortOrder,
}) => {
  const { ref, inView } = useInView();
  const { searchText } = useSearchStore();

  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage, 
    isFetchingNextPage, 
  } = useGames(selectGenre, selectPlatform, selectSortOrder, searchText);

  const skeletons = [1, 2, 3, 4, 5, 6];

  
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  if (error)
    return (
      <div className={styles.errorMessage} role="alert">
        <span className="font-medium">There was an error!</span> {error.message}
      </div>
    );

  return (
    <div className={styles.gameList}>
      {/* Loading Skeletons */}
      {isLoading &&
        skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}

      {/* Render Games */}
      {data?.pages.map((page, index) => (
        <React.Fragment key={index}>
          {page.results.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </React.Fragment>
      ))}

      {/* Load More Button or Infinite Scroll Trigger */}
      <div ref={ref}>
        {isFetchingNextPage && <div>Loading more games...</div>}
      </div>
    </div>
  );
};

export default GameList;