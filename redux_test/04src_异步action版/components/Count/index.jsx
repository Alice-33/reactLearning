import React, { Component } from 'react'
// 引入store，用于获取redux中的状态
import store from '../../redux/store'
// 引入action,专门用于创建action对象
import {createIncrementAction,createDecrementAction,
    createIncrementAsyncAction} from '../../redux/count_action'

export default class Count extends Component {
    // componentDidMount(){
    //     // 监测redux中状态的变化，只要有变化，就调用render
    //     store.subscribe(()=>{
    //         console.log('修改了');
    //         // 啥也不更新，但是会调用render
    //         this.setState({});
    //     })
    // }
    increment = () => {
        let { value } = this.selectNum;
        // 通知redux加value
        store.dispatch(createIncrementAction(value*1))
    }
    decrement = () => {
        let { value } = this.selectNum;
        store.dispatch(createDecrementAction(value*1))
    }
    incrementOdd = () => {
        if (store.getState() % 2 === 0) return;
        let { value } = this.selectNum;
        store.dispatch(createIncrementAction(value*1))
    }
    // 异步加，点击加之后不能立刻马上加，这里模拟一下
    incrementAsync = () => {
        let { value } = this.selectNum;
        // setTimeout(() => {
            store.dispatch(createIncrementAsyncAction(value*1,1000))
        // }, 1000);
    }
    render() {
        return (
            <div>
                <h2>当前求和结果为：{store.getState()}</h2>
                <select ref={c => this.selectNum = c} name="" id="">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                &nbsp;&nbsp;
                <button onClick={this.increment}>加</button>&nbsp;&nbsp;
                <button onClick={this.decrement}>减</button>&nbsp;&nbsp;
                <button onClick={this.incrementOdd}>奇数加</button>&nbsp;&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>&nbsp;&nbsp;
            </div>
        )
    }
}
