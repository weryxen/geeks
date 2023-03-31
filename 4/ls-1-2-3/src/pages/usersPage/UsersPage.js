import User from "../../comps/user/User";
import UsersList from "../../comps/usersLIst/UsersList";

const UsersPage = (props) =>{

    const user = {
        name: "Ali",
        userName: "Weryxen",
        age: "15"
    }
     const users = ["Weryxen", "Ali", "Johan", "Sega", "Kaneki"]

    return (
        <>
            <h1>Info About One User</h1>
            <User userInfo={user}/>
            <h1>---------------------------------------</h1>
            <h1>User List</h1>
            <UsersList usersList={users}/>
        </>
    );
}

export default UsersPage;