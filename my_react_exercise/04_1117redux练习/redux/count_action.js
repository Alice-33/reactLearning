// 动作对象，包含两个对象，type（必须）和data（可选）
import {INCREMENT,DECREMENT} from './constant'
import store from './store';
export const createIncrementAction=(data)=>({type:INCREMENT,data});
export const createDecrementAction=(data)=>({type:DECREMENT,data});
export const createIncrementSyncAction=(data)=>{
    return()=>{
        setTimeout(() => {
            store.dispatch(createIncrementAction(data));
        }, 1000);
    }
};
