import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link, withRouter } from "react-router-dom";
import { systems } from "../State/Utils";

/* Actions */
import { setSystem } from "../State/Actions";

class Systems extends React.Component {
  render() {
    const { setSystem, history, client } = this.props;

    return (
      <div>
        <h2>{client + " Systems"}</h2>
        {systems(client).map((elm, i) => (
          <button
            onClick={() => {
              setSystem(elm);
              history.push("/Transactions/" + elm);
            }}
            key={i}
          >
            {elm}
          </button>
        ))}
        <Link to={"/Clients"}>
          <button>Back</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = ({ selection }) => ({
  client: selection.client
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ setSystem }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(Systems)
);
