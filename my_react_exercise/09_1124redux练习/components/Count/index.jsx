import React, { Component } from 'react';
import { increment, decrement } from '../../redux/actions/count'
import store from '../../redux/store';

export default class Count extends Component {
    increment = () => {
        store.dispatch(increment(1));
    }
    decrement = () => {
        store.dispatch(decrement(1));
    }
    render() {
        console.log(store.getState());
        return (
            <div>
                <h3>结果：{store.getState().count}</h3>
                <button onClick={this.increment}>点击加1</button>
                &nbsp;&nbsp;&nbsp;
                <button onClick={this.decrement}>点击减1</button>
            </div>
        )
    }
}