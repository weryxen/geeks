import React, {Component} from 'react';

class FormPage extends Component {
    constructor(props) {
        super(props);
        this.state = {input: ""}
    }
    changeInput = (e) => {
        console.log(e.target.value)
        this.setState({input: e.target.value})
    }

    addProduct = () => {
        console.log(this.state)
        this.setState({input: ""})
    }

    clear = () => {
        this.setState({input: ""})
    }
    render() {
        return (
            <>
                <input onChange={this.changeInput} value={this.state.input} type="text"/>
                <button onClick={this.addProduct}>add</button>
                <button onClick={this.clear}>clear</button>
            </>
        );
    }
}

export default FormPage;