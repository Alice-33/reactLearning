// 创建对象——这个是最终暴露出来的吧
import { INCREMENT, DECREMENT } from '../constant'

export const increment=(data)=>({type:INCREMENT,data});
export const decrement=(data)=>({type:DECREMENT,data});