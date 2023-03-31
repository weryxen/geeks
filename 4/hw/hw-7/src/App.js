import React from 'react';
import "./App.css"
import UsersPage from "./pages/usersPage/UsersPage";
import ButtonPage from "./pages/buttonPage/ButtonPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import Menu from "./comps/menu/Menu";

function App(props) {
    return (
         <>
             <BrowserRouter>
                 <Menu/>
                 <Routes>
                     <Route index element={<UsersPage/>}/>
                     <Route path="/button" element={<ButtonPage/>}/>
                     <Route path="/main" element={<MainPage/>}/>
                 </Routes>
             </BrowserRouter>
         </>
    );
}

export default App;