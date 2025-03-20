import { useState, useEffect } from "react";
import MainContent from "./components/layout/MainContent";
import NavBar from "./components/layout/NavBar";
import SideBar from "./components/layout/SideBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GameDetailPage from './pages/GameDetailPage';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [gameQuery, setGameQuery] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // 🔹 حالة القائمة الجانبية

  const root = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // 🔹 دالة تبديل إظهار وإخفاء الـ Sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <BrowserRouter>
      <NavBar
        toggleTheme={toggleTheme}
        theme={theme}
        onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        toggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
      />
      <div>
        <SideBar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          onSelectGenre={(genre) => {
            setGameQuery({ ...gameQuery, genre });
            setIsSidebarOpen(false);
          }}
        />
        <Routes>
          <Route path="/" element={
            <MainContent
              selectPlatform={gameQuery.platform}
              selectSortOrder={gameQuery.sortOrder}
              selectGenre={gameQuery.genre}
              searchText={gameQuery.searchText}
              isSidebarOpen={isSidebarOpen}
              onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })}
              onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })}
            />
          } />
          <Route path="/game/:id" element={<GameDetailPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
