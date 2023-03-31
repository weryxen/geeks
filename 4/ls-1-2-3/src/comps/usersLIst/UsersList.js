const UsersList = (props) =>  {
    console.log(props)
    return (
        <>
            {
                props.usersList.map(small => <p>{small}</p>)
            }
        </>
    );
}

export default UsersList;