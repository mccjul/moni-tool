import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Select from "react-select";

/* Actions */
import { exeTrans } from "../State/Actions";

class Transactions extends React.Component {
  constructor() {
    super();
    this.state = { trans: [] };
  }
  render() {
    const { client, system, transactions } = this.props;
    console.log(this.state.trans.map(elm => elm.value));
    return (
      <div>
        <h2>{client + " " + system + " Transactions"}</h2>
        <Select
          cacheOptions
          isClearable
          isMulti
          onChange={trans =>
            this.setState({
              trans
            })
          }
          options={transactions.map(elm => ({
            value: elm,
            label: elm
          }))}
          value={this.state.trans}
        />
        <button
          onClick={() =>
            this.props.exe(
              client,
              system,
              this.state.trans.map(elm => elm.value)
            )
          }
          disabled={this.state.trans.length === 0}
        >
          Execute
        </button>
        <Link to={"/connect"}>
          <button>Back</button>
        </Link>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    exe: (client, system, transactions) => {
      dispatch(exeTrans(client, system, transactions));
    }
  };
};
const mapStateToProps = ({ selection }) => {
  return {
    client: selection.client || "",
    system: selection.system || "",
    transactions: selection.transactions || []
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
