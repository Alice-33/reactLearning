import React, { Component } from 'react'
import store from '../../redux/store'
import { createIncrementAction, createDecrementAction, createIncrementSyncAction } from '../../redux/count_action'
export default class Calculate extends Component {
    state = {
        sum: 0
    }
    componentDidMount() {
    }
    increment = () => {
        let { value } = this.option;
        store.dispatch(createIncrementAction(value * 1))
    }
    decrement = () => {
        let { value } = this.option;
        store.dispatch(createDecrementAction(value))
    }
    incrementOdd = () => {
        let { value } = this.option;
        if (store.getState() % 2 === 1) {
            store.dispatch(createIncrementAction(value * 1))
        }
    }
    incrementSync = () => {
        let { value } = this.option;
        store.dispatch(createIncrementSyncAction(value * 1))
    }
    render() {
        return (
            <div>
                <h2>当前的求和结果为：{store.getState()}</h2>
                <select ref={c => this.option = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>加</button>&nbsp;
                <button onClick={this.decrement}>减</button>&nbsp;
                <button onClick={this.incrementOdd}>奇数加</button>&nbsp;
                <button onClick={this.incrementSync}>异步加</button>
            </div>
        )
    }
}
