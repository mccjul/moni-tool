import * as React from "react";
import { Route, Switch } from "react-router-dom";

/* Routes */
import Welcome from "./Containers/Welcome.jsx";
import Connect from "./Containers/Connect.jsx";
import Transactions from "./Containers/Transactions.jsx";

const Routes = props => (
  <Switch>
    <Route exact path="/" component={Welcome} />
    <Route exact path="/connect" component={Connect} />
    <Route exact path="/transactions" component={Transactions} />
  </Switch>
);

export default Routes;
