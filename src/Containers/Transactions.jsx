import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { transactions } from "../State/Utils";

class Transactions extends React.Component {
  render() {
    const { client, system } = this.props;
    return (
      <div>
        <h2>{client + " " + system + " Transactions"}</h2>
        {transactions(client, system).map((elm, i) => (
          <div key={i}>
            <button>{elm}</button>
          </div>
        ))}
        <Link to={"/connect"}>
          <button>Back</button>
        </Link>
        {/* <button
          onClick={async () => {
            this.setState({ text: await helloWorld() });
          }}
        >
          push this
        </button> */}
        {/* <p>{this.state.text}</p> */}
      </div>
    );
  }
}

const mapStateToProps = ({ selection }) => {
  return {
    client: selection.client,
    system: selection.system
  };
};
export default connect(mapStateToProps, null)(Transactions);
