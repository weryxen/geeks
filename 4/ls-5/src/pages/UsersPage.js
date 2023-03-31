import React, {useState} from 'react';
import UsersList from "../components/usersList/UsersList";


function UsersPage(props) {
    const [users, setUsers] = useState([])

    const error = () => {
        console.log("error")
    }
    const getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(error)
    }

    const clear = () => {
        setUsers([ ])
    }
    return (
        <div>
            <button onClick={getUsers}>get users</button>
            <button onClick={clear}>clear</button>

            <h1 > Users Page</h1>
            <UsersList  usersList={users}/>
        </div>
    );

}

export default UsersPage;