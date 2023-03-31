import React, {useEffect, useState} from 'react';
import User from "../../comps/user/User";

function UsersPage(props) {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);


    const getUsers = () => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setUsers(data))
    }

    useEffect(getUsers, []);

    return (
        <>
            <h1>users</h1>
            {
                loading === true
                    ?
                    <div>загружается...</div>
                    :
                    users.slice(0, 10).map(user => <User info={user}/>)
            }
        </>
    );
}

export default UsersPage;