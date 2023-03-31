import React, { Component } from "react";
import classes from "./userPage.module.css";

class UserPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>UserPage</h1>
        <ul className={classes.color}>
          <li>name: {this.props.user.name} </li>
          <li>age: {this.props.user.age} </li>
        </ul>
      </div>
    );
  }
}

export default UserPage;
