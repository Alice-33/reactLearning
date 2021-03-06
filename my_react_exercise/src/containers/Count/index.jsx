import React, { Component } from 'react'
import { increment, decrement } from '../../redux/actions/count';
import {connect} from 'react-redux';

class Count extends Component {
    increment = () => {
        this.props.increment(1);
    }
    decrement = () => {
        this.props.decrement(1);
    }
    render() {
        return (
            <div>
                <h3>当前的结果是：{this.props.result}</h3>
                <button onClick={this.increment}>点击+1</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={this.decrement}>点击-1</button>
            </div>
        )
    }
}
export default connect(
    (state)=>({result:state.result}),
    {
        increment,
        decrement
    }
)(Count);