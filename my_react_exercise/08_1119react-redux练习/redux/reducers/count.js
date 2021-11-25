// 这里面是操作状态的动作
import { INCREMENT, DECREMENT } from '../constant'

let initState = 0;
export default function countReducer(preState = initState, action) {
    let { type, data } = action;
    console.log('type',type,'data',data);
    switch (type) {
        case INCREMENT:
            return preState + data;
        case DECREMENT:
            return preState - data;
        default:
            return preState;
    }
}