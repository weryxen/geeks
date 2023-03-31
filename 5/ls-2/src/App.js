import React from 'react';
import MainPage from "./pages/mainPage/MainPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import UsersPage from "./pages/usersPage/UsersPage";

function App(props) {
    return (
        <div className="App">
            {/*<UsersPage/>*/}
            <MainPage/>
        </div>
    );
}

export default App;