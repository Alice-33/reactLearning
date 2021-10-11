/*
    该文件专门用于暴露一个store对象，整个应用中只有一个对象
*/

// 引入createStore，用于创建核心store对象
import { createStore ,applyMiddleware} from 'redux';
// 引入为count服务的reducer
import countReducer from './count_reducers'

// 引入redux-thunk,用于支持异步action
import thunk from 'redux-thunk';

// 创建store对象
// 暴露出去
export default createStore(countReducer,applyMiddleware(thunk))
