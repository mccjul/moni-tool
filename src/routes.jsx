import * as React from "react";
import { Route } from "react-router-dom";

import Welcome from "./Containers/Welcome";
import Clients from "./Containers/Clients";
import Systems from "./Containers/Systems";
// import Transactions from "./Containers/Transactions";

const Routes = () => (
  <div>
    <Route exact path="/" component={Welcome} />
    <Route exact path="/Clients" component={Clients} />
    <Route exact path="/Systems/:name" component={Systems} />
    {/* <Route exact path="/Transactions/:name" component={Transactions} /> */}
  </div>
);

export default Routes;
