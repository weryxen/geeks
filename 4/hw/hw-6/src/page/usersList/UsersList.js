import React from 'react';

function UsersList(usersList,show) {
    return (
        <div>
            <ul>
                {
                    usersList.map(user =>
                        <li key={user.id}>
                            <span>{user.name}</span>
                            <span>{user.username}</span>
                            <span>{user.email}</span>
                            <button data-id={user.id} onClick={show}></button>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default UsersList;