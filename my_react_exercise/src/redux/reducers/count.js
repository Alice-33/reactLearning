// 这是暴露一个纯函数
import { INCREMENT, DECREMENT } from '../contanst';

const initState = 60;//基础分是60
export default function countReducer(preState = initState, action) {
    let { type, data } = action;
    console.log(preState);
    switch (type) {
        case INCREMENT:
            return preState + data;
        case DECREMENT:
            return preState - data;
        default:
            return preState;
    }
}