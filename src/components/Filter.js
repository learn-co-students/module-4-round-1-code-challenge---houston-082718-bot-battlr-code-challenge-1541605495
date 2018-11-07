import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    return (
      <div>
        <h3>Filter option: </h3>
        <select>
          <option name="sort-by-hp">hp</option>
          <option name="sort-by-defense">defense</option>
          <option name="sort-by-attack">attack</option>
        </select>
      </div>
    );
  }
}
