import React, { Component } from 'react'
// 这里面要使用的是store进行数据的获取——看图
// 然后通过action告诉redux去做什么
import store from '../../redux/store';
import { createIncrementAction, createDecrementAction } from '../../redux/count_action'

export default class Count extends Component {
    increment = () => {
        let { value } = this.select;
        console.log('value',value)
        store.dispatch(createIncrementAction(value*1));
    }
    decrement = () => {
        let { value } = this.select;
        store.dispatch(createDecrementAction(value));
    }
    render() {
        return (
            <div>
                <h3>您输入的结果为：{store.getState()}</h3>
                <select ref={c => this.select = c} name="" id="" style={{width:'50px'}}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                &nbsp;&nbsp;
                <button onClick={this.increment} style={{width:'50px'}}>加</button>
                &nbsp;&nbsp;
                <button onClick={this.decrement} style={{width:'50px'}}>减</button>
            </div>
        )
    }
}
