import React, {Component} from 'react';

class PageOne extends Component {
    constructor(props) {
        super(props);
        this.state = {users: []}
    }

    getUsers = () => {
        this.setState({users: ["ads","aad","das" ]})
    }

    componentDidMount() {
        this.getUsers()
        console.log(this.state.users)

    }

    componentDidUpdate(prevState) {
       if( prevState.users !== this.state.users) {
           console.log(this.state.users)
       }
    }

    render() {
        return (
            <>
                <h1>Page One</h1>

                <ul>
                    {this.state.users.map((users, lvl) =>
                        <li key={lvl}>{users}</li>)}
                </ul>
            </>
        );
    }
}

export default PageOne;