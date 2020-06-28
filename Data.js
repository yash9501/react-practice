import React, { Component } from "react";

class Data extends Component {
  render() {
    const a = [
      {
        name: "yash",
        id: 1,
      },
      {
        name: "raj",
        id: 2,
      },
    ];
    const b = a.map(function (item) {
      return (
        <div>
          <h3>{item.name}</h3>
          <h3>{item.id}</h3>
        </div>
      );
    });
    const c = a.map((item) => (
      <div>
        <h3>{item.name}</h3>
        <h3>{item.id}</h3>
      </div>
    ));

    return <div>{b}</div>;
  }
}

export default Data;
