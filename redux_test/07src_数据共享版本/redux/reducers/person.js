// 对人状态的初始化，以及状态的加工
// 这个里面放初始化的人
import { ADD_PERSON } from '../constant';

const initState=[
    {id:'1',name:'Alice',age:18}
];
export default function personReducers(preState=initState,action){
    console.log('preState=',preState,',action=',action);
    const {type,data}=action;
    switch (type) {
        case  ADD_PERSON:
            return [data,...preState]
        default:
            return preState;
    }
}