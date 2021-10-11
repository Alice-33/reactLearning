import React, { Component } from 'react'

export default class Count extends Component {
    state = {
        count: 0
    }
    increment = () => {
        let { count } = this.state;
        let { value } = this.selectNum;
        this.setState({ count: count + value * 1 })
    }
    decrement = () => {
        let { count } = this.state;
        let { value } = this.selectNum;
        this.setState({ count: count - value * 1 })
    }
    incrementOdd = () => {
        let { count } = this.state;
        if (count % 2 === 0) return;
        let { value } = this.selectNum;
        this.setState({ count: count + value * 1 })
    }
    // 异步加，点击加之后不能立刻马上加，这里模拟一下
    incrementAsync = () => {
        let { count } = this.state;
        let { value } = this.selectNum;
        setTimeout(() => {
            this.setState({ count: count + value * 1 })
        }, 1000);
    }
    render() {
        return (
            <div>
                <h2>当前求和结果为：{this.state.count}</h2>
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
