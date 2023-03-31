import React from 'react';

function User({info}) {
    console.log(info)
    return (
        <>
            {info.name}
        </>
    );
}

export default User;