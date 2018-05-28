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
    return (
      <div className="container-fluid text-center" style={{ paddingTop: 100 }}>
        <h2>{client + " " + system + " Transactions"}</h2>
        <br />
        <br />
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
        <br />

        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-info"
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
            <button type="button" className="btn btn-secondary">
              Back
            </button>
          </Link>
        </div>
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
