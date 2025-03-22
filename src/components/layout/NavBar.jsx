
import Logo from "./Logo";
import LogoImage from "../../assets/images/image.png";
import SearchInput from "./SearchInput";
import ThemeToggle from "../Theme/ThemeToggle";
import Sidebar from "./Sidebar"; 
import navBarStyles from "../../assets/styles/NaveBar.module.css";
import { useGameContext } from '../../context/GameContext';
import useThemeStore from '../../store/themeStore'; // Import themeStore

// NavBar component
const NavBar = () => {
  const { 
    isSidebarOpen, 
    toggleSidebar, 
    setSearchText 
  } = useGameContext();

  const { theme, toggleTheme } = useThemeStore(); // Use themeStore

  return (
    <>
      <div className={navBarStyles.navbar}>
        <div className="flex">
          
          <button // Sidebar toggle button
            className={`${navBarStyles.menuButton} ${isSidebarOpen ? navBarStyles.active : ""}`}
            onClick={toggleSidebar}
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
          <div className={`${navBarStyles.logoSection} transition-transform duration-300`}>
            <Logo image={LogoImage} text="Game App Header" className="logo-header" />
          </div>
        </div>

        <div className={navBarStyles.searchSection}>
          <SearchInput onSearch={setSearchText} />
        </div>

        <div className={navBarStyles.themeToggle}>
          <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
        </div>
      </div>

      <Sidebar />
    </>
  );
};

export default NavBar;
