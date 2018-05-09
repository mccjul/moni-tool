import React from "react";
import { Link } from "react-router-dom";
// import helloWorld from "../utils/api";
import { transaction_info } from "../utils/options";

export default class Transactions extends React.Component {
  constructor() {
    super();
    this.state = { text: "" };
  }
  render() {
    const { name } = this.props.match.params;

    return (
      <div>
        <h2>{name + " Transactions"}</h2>
        {transaction_info("DollarCity", "ECC").map((elm, i) => (
          <div key={i}>
            <button>{elm}</button>
          </div>
        ))}
        {/* <button
          onClick={async () => {
            this.setState({ text: await helloWorld() });
          }}
        >
          push this
        </button> */}
        <Link to={"/Systems/" + name}>
          <button>Back</button>
        </Link>
        <p>{this.state.text}</p>
      </div>
    );
  }
}
