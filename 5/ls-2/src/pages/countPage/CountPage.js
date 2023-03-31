import React from 'react';
import {useDispatch} from "react-redux";


function CountPage(props) {


    const dispatch = useDispatch()

    const plus = () => {
        dispatch({
            count: "PLUS_NUM"
        })
    }

    const minus = () => {
        dispatch({
            count: "MINUS_NUM"
        })
    }
    return (
        <div>
            <h1>{}</h1>
            <button>plus</button>
            <button>minus</button>
        </div>
    );
}

export default CountPage;