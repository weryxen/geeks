import React from 'react';

function UsersList ({usersList}) {

    const getOneUser = (event) =>{
        const id =  event.target.dataset.id
        fetch('https://jsonplaceholder.typicode.com/posts/${id}')
            .then(response => response.json())
            .then(data => console.log(data))
    }

    return (
        <div>
            <ul>
                {
                    usersList.map((user, index) =>
                        <li key={user.id}>
                            <p>{user.name}</p>
                            <button data-id={user.id} onClick={getOneUser}>getUsers</button>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default UsersList;