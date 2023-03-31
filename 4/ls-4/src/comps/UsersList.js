import React from 'react';

const UsersList = ({userList}) => {
    return (
        <div>
            <ul>
                {
                    userList.length > 0
                    ?
                    userList.map((frits, index ) => <li key={index}>{frits}</li>)
                    :
                        <li>пусто</li>
                }
            </ul>
        </div>
    );
}   

export default UsersList;