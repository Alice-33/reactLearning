import React, { Component } from 'react'
import {connect} from 'react-redux';
import {createIncrementAction} from '../../redux/count_action';

class Count extends Component {
    add=()=>{
        // 通知redux加1——要通过父组件传过来的方法
        this.props.jiaFa(1);

    }
    render() {
        return (
            <div>
                <h2>当前求和为：{this.props.sum}</h2>
                <button onClick={this.add}>点击加1</button>
            </div>
        )
    }
}
export default connect(
    // 映射状态
    state=>({sum:state}),
    // 映射操作状态的方法
    {jiaFa:createIncrementAction}
)(Count);