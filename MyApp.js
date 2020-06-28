import React, { Component } from "react";
import navbar from "./style.css";
import Time from "./Time";
import Data from "./Data";
import Character from "./Character";
import Form from "./Forms";

const a = "hello";
const b = "again";
class MyApp extends Component {
  constructor() {
    super();
    this.state = {
      name: "yash",
    };
    this.change = this.change.bind(this);
  }
  change() {
    this.setState({ name: "yashshah" });
  }
  render() {
    return (
      <div>
        <p className="navbar">
          {a} {b}
        </p>
        <p>
          {a} hello {b}
        </p>
        <h4>
          {this.props.p} {this.state.name}{" "}
          <button onClick={this.change}>change</button>
        </h4>

        <ul>
          <li>1</li>
          <li>2</li>
        </ul>
        <Time />
        <Data />
        <Character />
        <Form />
      </div>
    );
  }
}

export default MyApp;
