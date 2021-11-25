import countReducer from "../reducers/count";
import personReducer from "../reducers/person";
import { combineReducers } from "redux";

export default combineReducers({
   score:countReducer,
   personArr:personReducer
});