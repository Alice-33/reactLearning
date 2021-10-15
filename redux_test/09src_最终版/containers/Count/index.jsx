/*
    容器组件,借助react-redux
*/
// // 引入Count的UI组件
// import CountUI from '../../components/Count'

// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux';
import {
    increment,
    decrement,
    incrementAsync
} from '../../redux/actions/count';
import React, { Component } from 'react'


// 定义UI组件
class Count extends Component {

    increment = () => {
        let { value } = this.selectNum;
        // 通知redux加value
        this.props.increment(value * 1);
    }
    decrement = () => {
        let { value } = this.selectNum;
        this.props.decrement(value * 1);
    }
    incrementOdd = () => {
        let { value } = this.selectNum;
        if (this.props.count % 2 === 1) this.props.increment(value * 1);
    }
    // 异步加，点击加之后不能立刻马上加，这里模拟一下
    incrementAsync = () => {
        let { value } = this.selectNum;
        this.props.incrementAsync(value * 1, 500);
        // setTimeout(() => {
        // }, 1000);
    }
    render() {
        console.log('ui组件接收到的参数是', this.props)
        return (
            <div>
                <h2>Count组件</h2>
                <h4>当前求和为：{this.props.count}</h4>
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
                <br />
                <h4>当前的人员数量为：{this.props.people.length}</h4>
            </div>
        )
    }
}

// 这样跟ui建立起了联系,暴露一个Count的容器组件
// connect在第一次调用的时候要传入两个参数，且必须是函数
export default connect(
    (state) => ({ 
        count: state.count ,
        people:state.persons
    }),
    // mapDispatchToProps简写,只要提供action，react-redux可以自动的进行分发
    {
        increment,
        decrement,
        incrementAsync,
    }
)(Count);


