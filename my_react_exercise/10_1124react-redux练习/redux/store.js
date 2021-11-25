// 在这里创建redux对象
import {createStore} from 'redux';
import allReducer from './reducers'

export default createStore(allReducer);
