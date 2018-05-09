import React from "react";
import { Link } from "react-router-dom";
import { clients } from "../State/Utils";

export default class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h2>Welcome to Monitoring tool</h2>
        <Link to={"/Clients"}>
          <button>Go to Clients</button>
        </Link>
      </div>
    );
  }
}
