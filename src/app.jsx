import React from "react";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./State/store";
import Routes from "./Routes.jsx";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Routes />
        </HashRouter>
      </Provider>
    );
  }
}
