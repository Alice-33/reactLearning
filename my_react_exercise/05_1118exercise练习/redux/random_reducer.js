// 这个是操作状态的动作
// 这个用来生成随机数
const initState='';
export default function randomReducer(preState=initState,action){
    let {type,data}=action;
    switch(type){
        case 'presentRandom':
            return parseInt(Math.random() * 10);
        case 'yourRandom':
            return parseInt(Math.random() * 10);
        default:
            return preState;
    }
}