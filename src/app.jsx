import React from "react";
import { HashRouter } from "react-router-dom";
import Routes from "./Routes";

export default class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Routes />
      </HashRouter>
    );
  }
}
