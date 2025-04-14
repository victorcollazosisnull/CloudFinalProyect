import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home.tsx";
import MainHeader from "./common/MainHeader.tsx";
import MainNav from "./common/MainNav.tsx";
import MainFooter from "./common/MainFooter.tsx";
import Game from "./pages/Game.tsx";
import Game2 from './pages/Game2.tsx';

function App() {
    return (
        <>
            <BrowserRouter>
                <MainHeader />
                <MainNav />
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/game' element={<Game/>}/>
                    <Route path='/game2' element={<Game2/>}/>
                </Routes>
                <MainFooter />
            </BrowserRouter>

        </>
    );
}


export default App
