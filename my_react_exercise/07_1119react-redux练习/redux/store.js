import {createStore,applyMiddleware,combineReducers} from 'redux';
import countReducer from '../redux/reducers/count';
import personReducer from '../redux/reducers/person'
import thunk from 'redux-thunk'

const allReducers=combineReducers({
    sum:countReducer,
    people:personReducer
})
export default createStore(allReducers,applyMiddleware(thunk));