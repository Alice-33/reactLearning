import { INCREMENT, DECREMENT } from '../constant';

let initState = 80;
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