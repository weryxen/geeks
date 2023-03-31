import React, {Component} from 'react';
import Menu from "../comps/Menu";

class AboutPage extends Component {
    constructor(props) {
        super(props);
        this.state = {menu: false}
    }

    handleMenu = () => {
        this.setState({menu: !this.state.menu})
    }
    render() {
        return (
            <>
                <h1>About Page</h1>
                <button onClick={this.handleMenu}>click</button>
                <Menu status={this.state.menu}/>
                {/*// {this.state.menu && <Menu />}*/}

            </>
        );
    }
}

export default AboutPage;