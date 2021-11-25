import { ADD_PERSON } from '../contanst';

const initState = [];
export default function personReducer(preState = initState, actions) {
    let { type, data } = actions;
    console.log(preState,data);
    switch (type) {
        case ADD_PERSON:
            return [data, ...preState];
        default:
            return preState;
    }
}