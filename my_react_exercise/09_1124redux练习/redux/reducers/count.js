// 是用来加工状态的，返回的是状态的纯函数
import { INCREMENT, DECREMENT } from '../constant'
let initState = 60;
export default function countReducer(preState = initState, action) {
    let { type, data } = action;
    switch (type) {
        case INCREMENT:
            return preState + data;
        case DECREMENT:
            return preState - data;
        default:
            return preState;
    }
}