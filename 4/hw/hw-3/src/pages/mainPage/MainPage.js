import React, { Component } from "react";
import classes from "./mainPage.module.css";

class MainPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <h1>Main Page</h1>
        <ul className={classes.color}>
          <li>name: {this.props.user.name} </li>
          <li>age: {this.props.user.age} </li>
        </ul>
      </>
    );
  }
}

export default MainPage;
