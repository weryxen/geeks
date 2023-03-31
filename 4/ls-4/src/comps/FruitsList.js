import React from 'react';
import {logDOM} from "@testing-library/react";

function FruitsList(fruitsList) {
    console.log(fruitsList)
    return (
        <>
            <ul>
                {/*{*/}
                {/*    fruitsList.map((fruits, key) =>*/}
                {/*        <li key={key}>{fruits}</li>)*/}
                {/*} */}
                {
                    fruitsList.map((fruits => console.log(fruits)))
                }
            </ul>
        </>
    );
}

export default FruitsList;