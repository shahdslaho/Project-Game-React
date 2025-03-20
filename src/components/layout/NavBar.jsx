
import Logo from "./Logo";
import LogoImage from "../../assets/images/image.png";
import SearchInput from "./SearchInput";
import ThemeToggle from "../Theme/ThemeToggle";
import Sidebar from "./SideBar" // تأكد من أن المسار صحيح
import navBarStyles from "../../assets/styles/NaveBar.module.css";
import useThemeStore from "../../store/themeStore"; // Import the theme store

import PropTypes from 'prop-types';

const NavBar = ({ onSearch, toggleSidebar, isSidebarOpen }) => {

NavBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  isSidebarOpen: PropTypes.bool.isRequired
};
  const { theme, toggleTheme } = useThemeStore(); // Use the theme store

  return (
    <>
      <div className={navBarStyles.navbar}>
        <div className="flex">
          <button 
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
          <SearchInput onSearch={onSearch} />
        </div>

        <div className={navBarStyles.themeToggle}>
          <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
        </div>
      </div>

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default NavBar;
