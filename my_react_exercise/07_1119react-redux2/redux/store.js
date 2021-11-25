// 就是创建一个——有点全忘了
// 这个是要把reducer暴露出去
import {createStore,applyMiddleware} from 'redux'
import allReducers from './reducers/index'
import thunk from 'redux-thunk'

export default  createStore(allReducers,applyMiddleware(thunk));