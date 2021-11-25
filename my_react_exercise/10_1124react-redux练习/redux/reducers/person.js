import { ADD_PERSON } from '../constant'

let initState = [];
export default function personReducer(preState=initState, action) {
    let { type, data } = action;
    switch (type) {
        case ADD_PERSON:
            return [data, ...preState];
        default:
            return preState;
    }
}