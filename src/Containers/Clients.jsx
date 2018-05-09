import React from "react";

import { Link } from "react-router-dom";
import { clients } from "../State/Utils";
// import { names, transaction_info } from "../utils/options";

export default class Clients extends React.Component {
  render() {
    // console.log(transaction_info("DollarCity", "ECC"));
    return (
      <div>
        <h2>Clients</h2>
        {clients().map((elm, i) => (
          <Link to={"/Systems/" + elm} key={i}>
            <button>{elm}</button>
          </Link>
        ))}
        <Link to={"/"}>
          <button>Go Back</button>
        </Link>
      </div>
    );
  }
}
