import React from "react";
import { connect } from "react-redux";

import Select from "react-select";
import { clients, systems } from "../State/Utils";

/* Actions */
import { connectSystem } from "../State/Actions";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

class Connect extends React.Component {
  constructor() {
    super();
    this.state = { client: null, system: null };
  }
  render() {
    return (
      <div className="container">
        <div className="has-text-centered">
          <h2 className="title">Connect</h2>
          <Select
            cacheOptions
            isClearable
            onChange={client => this.setState({ client })}
            options={clients().map(elm => ({
              value: elm,
              label: elm
            }))}
            value={this.state.client}
          />
          <br />
          {this.state.client !== null && (
            <Select
              cacheOptions
              isClearable
              onChange={system => this.setState({ system })}
              options={systems(this.state.client.value).map(elm => ({
                value: elm,
                label: elm
              }))}
              value={this.state.system}
            />
          )}
          <br />
          <button
            disabled={this.state.client === null || this.state.system === null}
            className="button is-success"
            onClick={() =>
              this.props.connectSystem(
                this.state.client.value,
                this.state.system.value
              )
            }
          >
            Connect
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    connectSystem: (client, system) => {
      dispatch(connectSystem(client, system));
      props.history.push("/transactions");
    }
  };
};

export default connect(null, mapDispatchToProps)(Connect);
