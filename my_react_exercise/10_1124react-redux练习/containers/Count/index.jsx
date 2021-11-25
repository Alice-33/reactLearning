import React, { Component } from 'react'
import { connect } from 'react-redux';
import { increment, decrement } from '../../redux/actions/count';

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
                <h2>结果：{this.props.score}</h2>
                <button onClick={this.increment}>+1</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={this.decrement}>-1</button>
            </div>
        )
    }
}

export default connect(
    (state) => ({ score: state.score }),
    {
        increment,
        decrement
    }
)(Count);