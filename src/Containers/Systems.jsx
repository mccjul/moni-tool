import React from "react";
import { Link } from "react-router-dom";
import { systems } from "../State/Utils";

export default class Systems extends React.Component {
  render() {
    const { name } = this.props.match.params;

    return (
      <div>
        <h2>{name + " Systems"}</h2>
        {systems(name).map((elm, i) => (
          <Link to={"/Transactions/" + elm} key={i}>
            <button>{elm}</button>
          </Link>
        ))}
        <Link to={"/"}>
          <button>Back</button>
        </Link>
      </div>
    );
  }
}
