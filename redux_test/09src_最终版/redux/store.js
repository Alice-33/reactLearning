/*
    该文件专门用于暴露一个store对象，整个应用中只有一个对象
*/
// 引入createStore，用于创建核心store对象
import { createStore, applyMiddleware } from 'redux';

// 引入redux-thunk,用于支持异步action
import thunk from 'redux-thunk';
// 引入插件库
import { composeWithDevTools } from 'redux-devtools-extension';
// 引入汇总之后的reducers
import allReducers from './reducers/index';

// 创建store对象
// 暴露出去
export default createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)))
