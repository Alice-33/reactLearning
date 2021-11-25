import { ADD_PERSON } from '../constant';

let initState = ['Jack'];
export default function personReducer(preState = initState, action) {
    let { type, data } = action;
    switch (type) {
        case ADD_PERSON:
            return [...preState, data];
        default: return preState;
    }
}
