
const User = (props) => {
    console.log(props)
    return (
        <>
            <p>name: {props.userInfo.name}</p>
            <p>user name:  {props.userInfo.userName}</p>
            <p>age:  {props.userInfo.age}</p>
        </>
    );
}

export default User;