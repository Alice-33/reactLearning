import React, { Component } from 'react'
import { increment, decrement } from '../../redux/actions/count';
import store from '../../redux/store';

export default class Count extends Component {
    increment = () => {
        store.dispatch(increment(1));
    }
    decrement = () => {
        store.dispatch(decrement(1));
    }
    render() {
        return (
            <div>
                <h3>当前的结果是：{store.getState().result}</h3>
                <button onClick={this.increment}>点击+1</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={this.decrement}>点击-1</button>
            </div>
        )
    }
}
