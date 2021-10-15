import React, { Component } from 'react'

export default class Count extends Component {

    increment = () => {
        let { value } = this.selectNum;
        // 通知redux加value
        this.props.jia(value*1);
    }
    decrement = () => {
        let { value } = this.selectNum;
        this.props.jian(value*1);
    }
    incrementOdd = () => {
        let { value } = this.selectNum;
        this.props.jia(value*1);
    }
    // 异步加，点击加之后不能立刻马上加，这里模拟一下
    incrementAsync = () => {
        let { value } = this.selectNum;
        this.props.jiaAsync(value*1,500);
        // setTimeout(() => {
        // }, 1000);
    }
    render() {
        console.log('ui组件接收到的参数是', this.props)
        return (
            <div>
                <h2>当前求和结果为：{this.props.count}</h2>
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
