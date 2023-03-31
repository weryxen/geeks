import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {changeTitleActions, changeWithParams} from "../../redux/actions/actions";

function MainPage() {
    const {title} = useSelector(state => state.titleReducer)
    const dispatch =  useDispatch()

    const changeTitle = () => {
        dispatch(changeTitleActions())
    }

    const changeParams = () => {
        dispatch(changeWithParams("hello"))
    }
    return (
        <>
            <h1>{title}</h1>
            <button onClick={changeTitle}>change title</button>
            <button onClick={changeParams}>change with params</button>
        </>
    );
}



export default MainPage;