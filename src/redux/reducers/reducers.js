import { combineReducers } from "redux";
import { studentReducers } from "./studentReducers";

const reducer = combineReducers({
  student: studentReducers,
});

export default reducer;
