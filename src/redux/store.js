import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import reducers from "./reducers/reducers.js";

const bindMiddlware = (middlware) => {
  const { composeWithDevTools } = require("redux-devtools-extension");
  return composeWithDevTools(applyMiddleware(...middlware));
};

const store = createStore(reducers, bindMiddlware([thunkMiddleware]));

export default store;
