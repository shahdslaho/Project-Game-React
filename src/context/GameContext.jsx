/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [gameQuery, setGameQuery] = useState({
    platform: null,
    genre: null,
    sortOrder: '',
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar state
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); 
  };

  // Update genre
  const setGenre = (genre) => {
    setGameQuery(prev => ({ ...prev, genre })); 
    setIsSidebarOpen(false); // Close sidebar
  };

  // Update platform
  const setPlatform = (platform) => {
    setGameQuery(prev => ({ ...prev, platform })); 
  };

  // Update game sort order
  const setSortOrder = (sortOrder) => {
    setGameQuery(prev => ({ ...prev, sortOrder })); 
  };

  const contextValue = {
    platform: gameQuery.platform,
    genre: gameQuery.genre,
    sortOrder: gameQuery.sortOrder,
    isSidebarOpen,
    toggleSidebar,
    setGenre,
    setPlatform,
    setSortOrder
  };

  return (
    <GameContext.Provider value={contextValue}>
      {children}
    </GameContext.Provider>
  );
};

// Custom hook to use GameContext
export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGameContext must be used within a GameProvider');
  }
  return context;
};