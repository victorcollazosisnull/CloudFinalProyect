
import { useState, useEffect } from "react";
import './App.css';
import HomeMenu from "./pages/HomeMenu.tsx";
import Home from "./pages/Home.tsx";
import MainHeader from "./common/MainHeader.tsx";
import MainNav from "./common/MainNav.tsx";
import MainFooter from "./common/MainFooter.tsx";
import Game from "./pages/Game1.tsx";
import Game2 from './pages/Game2.tsx';
import Game3 from './pages/Game3.tsx';
import Game4 from './pages/Game4.tsx';
import Game5 from './pages/Game5.tsx';
import Game6 from './pages/Game6.tsx';
import Login from "./pages/Login.tsx";
import Register from "./pages/Register"; 
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
function App() {
  const [user, setUser] = useState<{email: string} | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  return (
    <>
      <BrowserRouter>
        <MainHeader />
        <MainNav />
        <Routes>
          <Route path="/" element={user ? <Navigate to="/home" /> : <HomeMenu />} />
          <Route path="/home" element={<Home />} />
          <Route path="/game1" element={<Game />} />
          <Route path="/game2" element={<Game2 />} />
          <Route path="/game3" element={<Game3 />} />
          <Route path="/game4" element={<Game4 />} />
          <Route path="/game5" element={<Game5 />} />
          <Route path="/game6" element={<Game6 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <MainFooter />
      </BrowserRouter>
    </>
  );
}

export default App;