import React, {Component} from 'react';
import UsersList from "../comps/UsersList";

class UsersPage extends Component {
    constructor(props) {
        super(props);
        this.state = {users: []}
    }

    btnClick = () => {
        this.setState({users: ["banana", "apple", "mango"]})
    }
    render() {
        return (
            <>
                <button onClick={this.btnClick}>get users</button>
                <UsersList userList={this.state.users}/>
            </>
        );
    }
}

export default UsersPage;