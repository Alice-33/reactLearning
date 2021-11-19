import { ADD_PERSON } from '../constant'
let initState = '';
export default function personReducer(preState = initState, action) {
    let { type, data } = action;
    console.log('person',type,data)
    switch (type) {
        case ADD_PERSON:
            return [data,...preState];
        default:
            return preState;
    }
}