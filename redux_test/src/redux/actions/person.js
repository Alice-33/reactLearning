// 这里主要是操作状态的动作
import { ADD_PERSON } from '../constant';
// 暴露一个操作状态的方法
export const addPerson = (personObj) => ({ type: ADD_PERSON, data: personObj });


