import React from 'react';
import { useSelector} from "react-redux";


function Menu(props) {
    const {menu} = useSelector(state => state)
    return (
        <ul className={menu ? "activeMenu" : "hiddenMenu"}>
            <li>home</li>
            <li>menu</li>
            <li>links</li>
        </ul>
    );
}

export default Menu;