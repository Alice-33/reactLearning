/*
    该文件专门用于暴露一个store对象，整个应用中只有一个对象
*/

// 引入createStore，用于创建核心store对象
import { createStore } from 'redux';
// 引入为count服务的reducer
import countReducer from './count_reducers'

// 创建store对象
// 暴露出去
export default createStore(countReducer)
