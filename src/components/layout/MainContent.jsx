/* eslint-disable react/prop-types */
import { GameHeading } from "../Games/GameHeading";
import GameList from "../Games/GameList";
import PlatformSelector from "../Platform/PlatformSelector";
import SortSelector from "../SortSelector";
import { useGameContext } from '../../context/GameContext';

const MainContent = () => {
  const { 
    platform,
    genre,
    sortOrder,
    searchText,
    isSidebarOpen,
    setPlatform,
    setSortOrder
  } = useGameContext(); // Use game context for state management

  return (
    <main className={`transition-all ${isSidebarOpen ? 'lg:ml-64' : 'ml-5'} p-4 md:p-8`}>
      <div className="my-6 mx-6">
        <GameHeading
          selectGenre={genre}
          selectPlatform={platform}
        />
      </div>
      <div className="flex flex-wrap gap-4 my-6 mx-6">
        <PlatformSelector
          onSelectPlatform={setPlatform} // Platform selection
          selectPlatform={platform}
        />
        <SortSelector
          onSelectSortOrder={setSortOrder} // Sort order selection
          selectSortOrder={sortOrder}
        />
      </div>
      <div className="mt-8">
        <GameList
          selectPlatform={platform}
          selectGenre={genre}
          selectSortOrder={sortOrder}
          searchText={searchText} // Pass search text to game list
        />
      </div>
    </main>
  );
};

export default MainContent;
