
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainContent from "./components/layout/MainContent";
import NavBar from "./components/layout/NavBar";
import SideBar from "./components/layout/Sidebar";
import GameDetailPage from './components/layout/GameDetailPage';
import { GameProvider } from './context/GameContext';

// Main application component
function App() {
  return (
    <BrowserRouter>
      <GameProvider>
        <NavBar />
        <div>
          <SideBar />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/game/:id" element={<GameDetailPage />} />
          </Routes>
        </div>
      </GameProvider>
    </BrowserRouter>
  );
}

export default App;
