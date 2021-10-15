/*
    该文件专门用于暴露一个store对象，整个应用中只有一个对象
*/

// 引入createStore，用于创建核心store对象
import { createStore ,applyMiddleware,combineReducers} from 'redux';
// 引入为count服务的reducer
import countReducer from './reducers/count'
import personReducer from './reducers/person'
// 引入redux-thunk,用于支持异步action
import thunk from 'redux-thunk';

// 合并reducer,保存的要是对象
const allReducers=combineReducers({
    sum:countReducer,
    people:personReducer
})
// 创建store对象
// 暴露出去
export default createStore(allReducers,applyMiddleware(thunk))
