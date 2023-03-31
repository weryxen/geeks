import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";


function ChangeTitle() {
    const [input, setInput] = useState("")

    const dispatch = useDispatch()

    const changeTitle = () => {
        dispatch({
            type: "CHANGE_ABOUT_TITLE",
        })
    }

    const changeTitleWithParams = () => {
        dispatch({
            type: "WITH_PARAMS",
            payload: "hello ali"
        })
    }
    const changeInput = () => {
        dispatch({
            type: "INPUT_VALUE",
            payload: input
        })
    }

    return (
        <>
            <button onClick={changeTitle} >change title</button>
            <button onClick={changeTitleWithParams} >change title with params</button>
            <h1>--------------------</h1>
            <input type="text" onChange={(e) => setInput( e.target.value)}/>
            <button onClick={changeInput}>from input</button>
        </>
    );
}

export default ChangeTitle;