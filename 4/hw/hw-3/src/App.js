
import React, {Component} from 'react';
import MainPage from "./pages/mainPage/MainPage";
import UserPage from "./pages/userPage/UserPage";


function App() {
    const userinfo = {
        name: "Anna",
        age: 19
    }

    const btnClick = () => {
        alert("вы кликнули")
    }

    return (
    <div className="App">
        <MainPage user={userinfo}/>
        <UserPage user={userinfo}/>
        <h1>task 2</h1>
        <button onClick={btnClick}>click</button>
    </div>
  );
}

export default App;
