import { combineReducers } from "redux";
import count from './reducers/count';
import person from './reducers/person';

export default combineReducers({
    result:count,
    personArr:person
})