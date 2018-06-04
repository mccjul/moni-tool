import React from "react";
import { connect } from "react-redux";

import Select from "react-select";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

/* Actions */
import { connectSystem, getOptions } from "../State/Actions";

class Connect extends React.Component {
  constructor() {
    super();
    this.state = {
      client: null,
      system: null,
      clientNum: null,
      username: null,
      password: null
    };
  }
  componentDidMount() {
    this.props.getOptions();
  }
  render() {
    return (
      <div className="container-fluid text-center" style={{ paddingTop: 80 }}>
        <h2 className="title">Connect</h2>
        <br />
        <br />
        <Select
          cacheOptions
          isClearable
          onChange={client =>
            this.setState({
              client,
              system: null
            })
          }
          options={this.props.clients.map(elm => ({
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
            options={this.props.options
              .filter(elm => elm.clients === this.state.client.value)[0]
              ["systems"].map(elm => ({
                value: elm,
                label: elm
              }))}
            value={this.state.system}
          />
        )}
        <br />
        {this.state.system !== null && [
          <input
            type="number"
            className="form-control"
            placeholder="Client#"
            min="0"
            step="1"
            value={this.state.clientNum}
            onChange={e => this.setState({ clientNum: e.target.value })}
          />,
          <br />,
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={this.state.username}
            onChange={e => this.setState({ username: e.target.value })}
          />,
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
          />
        ]}
        <br />
        <button
          disabled={
            this.state.client === null ||
            this.state.system === null ||
            this.state.clientNum === null ||
            this.state.username === "" ||
            this.state.password === ""
          }
          className="btn btn-success"
          onClick={() =>
            this.props.connectSystem(
              this.state.client.value,
              this.state.system.value,
              this.state.clientNum,
              this.state.username,
              this.state.password
            )
          }
        >
          Connect
        </button>
      </div>
    );
  }
}

const MySwal = withReactContent(Swal);

const mapDispatchToProps = (dispatch, props) => {
  return {
    connectSystem: (client, system, clientNum, username, password) => {
      dispatch(connectSystem(client, system, clientNum, username, password));
      MySwal.fire({
        title: <p>Connected</p>,
        type: "success"
      });

      props.history.push("/transactions");
    },
    getOptions: () => dispatch(getOptions())
  };
};
const mapStateToProps = ({ selection }) => {
  return {
    clients:
      selection.options !== undefined
        ? selection.options.map(elm => elm.clients)
        : [],
    options: selection.options
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Connect);
