import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {addUserAction, changeTitleActions, changeWithParams, setValue, deleteAll} from "../../redux/actions/actions";
import User from "../../components/user/User";


function UsersPage() {

    const title = useSelector(state => state.titleReducer.title)
    const dispatch =  useDispatch()
    const {value, users, info} =  useSelector(state => state.usersReducer)

    const changeInput = (event) => {
        dispatch(setValue(event.target.value))
    }

    const addUser = () => {
        dispatch(addUserAction(value))
    }
    const deleteUserAll = () => {
        dispatch(deleteAll())
    }
    return (
        <div>
            <h1>{value}</h1>
            <input type="text" onChange={changeInput} value={value}/>
            <button onClick={addUser}> add</button>
            <button onClick={deleteUserAll}>del all</button>
            {users.map((user, index) => <User key={index} userName={user}/>)}
        </div>
    );
}

export default UsersPage;