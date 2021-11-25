// 在这里创建redux对象
import {createStore} from 'redux';
import reducer from './reducers'

export default createStore(reducer);
