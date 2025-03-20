/* eslint-disable react/prop-types */
import { GameHeading } from "../Games/GameHeading";
import GameList from "../Games/GameList";
import PlatformSelector from "../Platform/PlatformSelector";
import SortSelector from "../SortSelector";

const MainContent = ({
  selectGenre,
  onSelectPlatform,
  selectPlatform,
  selectSortOrder, 
  onSelectSortOrder,
  searchText,
  isSidebarOpen
}) => {
  return (
    <main className={`
     
      transition-all 
     
      ${isSidebarOpen ? 'lg:ml-64' : 'ml-5'}
      p-4 md:p-8
    `}>
      <div className={`
        
      `}>
        <div className="  my-6 mx-6">
        <GameHeading
          selectGenre={selectGenre}
          selectPlatform={selectPlatform}
        />
        </div>
        <div className="flex flex-wrap gap-4 my-6 mx-6">
          <PlatformSelector
            onSelectPlatform={onSelectPlatform}
            selectPlatform={selectPlatform}
          />
          <SortSelector
            onSelectSortOrder={onSelectSortOrder}
            selectSortOrder={selectSortOrder}
          />
        </div>
        <div className="mt-8">
          <GameList
            selectPlatform={selectPlatform}
            selectGenre={selectGenre}
            selectSortOrder={selectSortOrder}
            searchText={searchText}
          />
        </div>
      </div>
    </main>
  );
};

export default MainContent;
