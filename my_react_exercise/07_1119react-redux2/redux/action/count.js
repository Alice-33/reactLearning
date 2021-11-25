// 返回的是一个函数
import { INCREMENT, DECREMENT } from '../contanst'

export const increment=(data)=>({type:INCREMENT,data});
export const decrement=(data)=>({type:DECREMENT,data});