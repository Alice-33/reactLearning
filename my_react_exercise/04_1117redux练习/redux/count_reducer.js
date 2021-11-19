// reducer
// 用于交给你初始化状态，加工状态的
// 根据九state和action，产生新的state的纯函数

// 创建一个为Count服务的reducer，他的本质是一个函数
// 这个函数会接收到2个参数，分别是之前的状态和动作对象

// 在这里加入常量
import { INCREMENT, DECREMENT } from './constant'

const initState = 0;
export default function countReducer(preState = initState, action) {
    let { type, data } = action;
    // 根据type决定如何处理数据
    console.log('preState=', preState, ',action=', action);
    switch (type) {
        case INCREMENT:
            return preState + data;
        case DECREMENT:
            return preState - data;
        default:
            return preState;
    }
}