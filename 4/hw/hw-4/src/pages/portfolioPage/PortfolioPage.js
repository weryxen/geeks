import React, {Component} from 'react';

class PortfolioPage extends Component {
    constructor(props) {
        super(props);
        this.state = {works: []}
    }

    handleMenu  = () => {
        this.setState(["Work1", "Work2"])
        console.log(this.state);
    }

    render() {
        return (
            <>
                <button onClick={this.handleMenu}>get</button>
                <ul>
                    <li>Work1</li>
                    <li>Work2</li>
                </ul>
            </>
        );
    }
}

export default PortfolioPage;