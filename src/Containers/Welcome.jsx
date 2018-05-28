import React from "react";
import { Link } from "react-router-dom";

export default class Welcome extends React.Component {
  render() {
    return (
      <div className="container-fluid text-center" style={{ paddingTop: 150 }}>
        <h2 className="title">Welcome to Monitoring tool</h2>
        <br />
        <br />
        <Link to={"/connect"}>
          <button className="btn btn-primary" type="button">
            Go to Clients
          </button>
        </Link>
      </div>
    );
  }
}
