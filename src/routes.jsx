import * as React from "react";
import { Route, Switch } from "react-router-dom";

/* Routes */
import Welcome from "./Containers/Welcome.jsx";
import Clients from "./Containers/Clients.jsx";
import Systems from "./Containers/Systems.jsx";
import Transactions from "./Containers/Transactions.jsx";

const Routes = props => (
  <Switch>
    <Route exact path="/" component={Welcome} />
    <Route exact path="/Clients" component={Clients} />
    <Route exact path="/Systems/:name" component={Systems} />
    <Route exact path="/Transactions/:name" component={Transactions} />
  </Switch>
);

export default Routes;
