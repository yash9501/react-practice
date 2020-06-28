import React, { Component } from "react";

class Character extends Component {
  constructor() {
    super();
    this.state = {
      characters: {},
    };
  }
  componentDidMount() {
    fetch("https://swapi.dev/api/people/2")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ characters: data });
      });
  }
  render() {
    const a = Object.entries(this.state.characters);
    const b = a.map(function (key, value) {
      return (
        <div>
          <h3>
            {key} : {value}
          </h3>
        </div>
      );
    });
    return (
      <div>
        <h3>{b}</h3>
      </div>
    );
  }
}
export default Character;
