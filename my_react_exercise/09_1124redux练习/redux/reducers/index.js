import countReducer from "../reducers/count";
import personReducer from "../reducers/person";
import { combineReducers } from "redux";

export default combineReducers({
   count:countReducer,
   personArr:personReducer
});