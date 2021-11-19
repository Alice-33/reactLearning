import {createStore} from 'redux';
import countReducer from '../redux/count_reducer';

export default createStore(countReducer)