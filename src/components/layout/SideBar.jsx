/* eslint-disable react/prop-types */
import GenreList from "../Genres/GenreList";
import sidbar from "../../assets/styles/SideBar.module.css";
import navBarStyles from "../../assets/styles/NaveBar.module.css"
import { useGameContext } from '../../context/GameContext';

const SideBar = () => {
  const { isSidebarOpen, setGenre, toggleSidebar } = useGameContext();

  return (
      <div className={`${sidbar.list} ${navBarStyles.sidebar} ${isSidebarOpen ? navBarStyles.open : ""}`}>
       <button 
               className={`${navBarStyles.menuButton} ${isSidebarOpen ? navBarStyles.active : ""}`} 
               onClick={toggleSidebar} // Toggle sidebar visibility
             >
             
               {isSidebarOpen ? (
                 <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                   strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                   <line x1="18" y1="6" x2="6" y2="18"></line>
                   <line x1="6" y1="6" x2="18" y2="18"></line>
                 </svg>
               ) : (
                 <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                   strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                   <line x1="3" y1="12" x2="21" y2="12"></line>
                   <line x1="3" y1="6" x2="21" y2="6"></line>
                   <line x1="3" y1="18" x2="21" y2="18"></line>
                 </svg>
               )}
             </button>
<div className={sidbar.listButten}>
 
 <GenreList onSelectGenre={(genre) => {
         setGenre(genre); // Set selected genre
        toggleSidebar();  // Close sidebar after selection
      }} />
</div>
     
      </div>
   
  );
};

export default SideBar;
