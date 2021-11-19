// 这里面不就是一个对象吗，包含两个东西，type和data
// 专门给Count组件生成action组件，返回的一定是一个对象
import { INCREMENT, DECREMENT } from '../constant'

export const createIncrementAction=(data)=>({type:INCREMENT,data});
export const createDecrementAction=(data)=>({type:DECREMENT,data});