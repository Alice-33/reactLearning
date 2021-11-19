// 专门用来暴露一个store对象
// 他是用来把state、action、reducer联系在一起的对象

// 引入createStore,用于创建核心store对象
import {createStore,applyMiddleware} from 'redux';
// 引入为count服务的reducer
import countReducer from './count_reducer';

// 引入redux-thunk用于支持异步action
import thunk from 'redux-thunk'

// 创建store对象
// 暴露出去
export default createStore(countReducer,applyMiddleware(thunk));
