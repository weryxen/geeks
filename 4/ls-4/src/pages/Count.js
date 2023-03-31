import React, {Component} from 'react';

class Count extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 0}
    }
    plus = () => {
        this.setState({count: this.state.count + 1})
    }
    minus = () => {
        this.setState({count: this.state.count - 1})
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.plus}>+</button>
                <button onClick={this.minus}>-</button>
            </div>
        );
    }
}

export default Count;