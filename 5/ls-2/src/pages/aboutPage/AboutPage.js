import React from 'react';
import Menu from "../../components/menu/Menu";
import {useDispatch} from "react-redux";

function AboutPage(props) {
    const dispatch = useDispatch()

    const handleMenu = () => {
        dispatch({
            type:"HANDLE_MENU"
        })
    }
    return (
        <>
            <button onClick={handleMenu}>menu</button>
            <Menu/>
        </>
    );
}

export default AboutPage;