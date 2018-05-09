import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link, withRouter } from "react-router-dom";
import { clients } from "../State/Utils";

/* Actions */
import { setClient } from "../State/Actions";

class Clients extends React.Component {
  render() {
    const { setClient, history } = this.props;
    return (
      <div>
        <h2>Clients</h2>
        {clients().map((elm, i) => (
          <button
            onClick={() => {
              setClient(elm);
              history.push("/Systems/" + elm);
            }}
            key={i}
          >
            {elm}
          </button>
        ))}
        <Link to={"/"}>
          <button>Go Back</button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setClient }, dispatch);
export default connect(null, mapDispatchToProps)(withRouter(Clients));
