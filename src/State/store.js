import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./Reducers";

export default createStore(reducers, compose(applyMiddleware(thunk)));
