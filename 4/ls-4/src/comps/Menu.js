import React from 'react';

function Menu({status}) {
    return (
        <>
            <ul className={status ? "menu" : "notMenu"}>
                <li>home</li>
                <li>contact</li>
                <li>about</li>
            </ul>
        </>
    );
}

export default Menu;