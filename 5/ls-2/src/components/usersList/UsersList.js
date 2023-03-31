import React from 'react';
import {useDispatch, useSelector} from "react-redux";

function UsersList() {
    const users = useSelector(state => state.users)
    return (
        <div>
            {users.map(users => <li>{users}</li>)}
        </div>
    );
}

export default UsersList;