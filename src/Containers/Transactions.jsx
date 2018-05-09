import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { transactions } from "../State/Utils";

/* Actions */
import { setSystem } from "../State/Actions";

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
        <Link to={"/Systems/" + client}>
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

const mapStateToProps = ({ selection }) => ({
  client: selection.client,
  system: selection.system
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ setSystem }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
