/*
    该文件专门为Count组件生成action对象
*/
import { INCREMENT, DECREMENT } from '../constant';

// 同步action就是指action的值为object
export const createIncrementAction = (data) => ({ type: INCREMENT, data });
export const createDecrementAction = (data) => ({ type: DECREMENT, data });

// 所谓的异步action就是指返回的值为函数,异步的action中一般都会调用同步的action
export const createIncrementAsyncAction = (data, time) => {
    // 需要返回一个函数
    return (dispatch) => {
        setTimeout(() => {
            // 通知redux加data
            dispatch(createIncrementAction(data));
        }, time);
    }
}