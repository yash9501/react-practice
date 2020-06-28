import React, { Component } from "react";
class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
    };
    this.change = this.change.bind(this);
  }
  change(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }
  render() {
    return (
      <div>
        <form>
          <label>
            firstname
            <input
              type="text"
              value={this.state.firstname}
              name="firstname"
              onChange={this.change}
            ></input>
          </label>
          <label>
            lastname
            <input
              type="text"
              value={this.state.lastname}
              name="lastname"
              onChange={this.change}
            ></input>
          </label>
        </form>
        <h3>{this.state.firstname}</h3>
        <h3>{this.state.lastname}</h3>
      </div>
    );
  }
}

export default Form;
