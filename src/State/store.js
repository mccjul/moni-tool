import { applyMiddleware, createStore } from "react-redux";
import thunkMiddleware from "redux-thunk";
import reducers from "./Reducers";

export default createStore(reducers, {}, applyMiddleware(thunkMiddleware));
