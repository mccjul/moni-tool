import React from "react";

import Select from "react-select";
import { clients, systems } from "../State/Utils";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

export default class Connect extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="has-text-centered">
          <h2 className="title">Connect</h2>
          <Select cacheOptions options={options} />
          <Select cacheOptions options={options} />
          <button className="button is-success">Connect</button>
        </div>
      </div>
    );
  }
}
