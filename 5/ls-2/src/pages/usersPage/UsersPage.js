import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import UsersList from "../../components/usersList/UsersList";


function UsersPage(props) {
    const dispatch = useDispatch()

    const value  = useSelector(state => state.value)

    const changeInput = (event) => {
        dispatch({
            type: "VALUE",
            payload: event.target.value
        })
    }
    const addUser = () => {
        dispatch({
            type: "ADD_USER",
            payload: value
        })
    }
    const deleteAll = () => {
        dispatch({
            type: "DELETE_ALL",
            payload: ""
        })
    }
    
    return (
        <>
            <input onChange={changeInput} type="text" value={value}/>
            <button  onClick={addUser}>add</button>

            <button onClick={deleteAll}>delete all</button>

            <UsersList/>
        </>
    );
}

export default UsersPage;