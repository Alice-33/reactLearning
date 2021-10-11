/*
    1、该文件是用于创建一个为Count服务的reducer，
    reducer的本质就是一个函数
    2、这个函数会接到2个参数，分别为之前的状态以及动作对象
*/
const initState=0;
export default function countReducer(preState=initState, action) {
    // 从action对象中获取type、data
    let { type, data } = action;
    console.log('preState=',preState,',action=',action);
    // 根据type决定如何处理数据
    switch (type) {
        case "increment":
            return preState + data;
        case "decrement":
            return preState - data;
        default:
            // 调用这个函数却不加也不减——这就是初始化的状态
            return preState;
    }
}



