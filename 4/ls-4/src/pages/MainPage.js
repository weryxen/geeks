import React, {Component} from 'react';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {title: "old text"}
    }

     changeHandler = () => {
         console.log("hi")
         this.setState({title: "new text"})
    }
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={this.changeHandler}>change title</button>
            </div>
        );
    }
}

export default MainPage;