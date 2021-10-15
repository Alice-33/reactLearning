// 该文件用于汇总所有的reducers
// 引入为count服务的reducer
import count from './count'
import persons from './person'
import { combineReducers } from 'redux';

// 合并reducer,保存的要是对象
export default combineReducers({
    count,
    persons
})
 