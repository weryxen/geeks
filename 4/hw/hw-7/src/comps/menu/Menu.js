import React from 'react';
import {Link, NavLink} from "react-router-dom";

function Menu(props) {
    return (
        <ul className="menu">
                <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}> users</NavLink>
                <NavLink to="/button" className={({isActive}) => isActive ? "active" : ""}> buttons </NavLink>
                <NavLink to="/main" className={({isActive}) => isActive ? "active" : ""}> main </NavLink>
        </ul>
    );
}

export default Menu;