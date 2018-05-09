import React from "react";
import { Link } from "react-router-dom";

export default class Welcome extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="has-text-centered">
          <h2 className="title">Welcome to Monitoring tool</h2>
          <Link to={"/Clients"}>
            <button className="button is-info">Go to Clients</button>
          </Link>
        </div>
      </div>
    );
  }
}
