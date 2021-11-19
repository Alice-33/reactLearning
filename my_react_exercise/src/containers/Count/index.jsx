// 这是一个容器组件，向内会和UI组件进行交互，向外会和redux进行交互
import React, { Component } from 'react'
// import CountUI from '../../components/CountUI'
// 因为向外要和redux进行交互，所以需要store——但是我们用了内置的库了，就不需要了
// 用于连接UI组件和redux
import { connect } from 'react-redux';
import { createIncrementAction, createDecrementAction } from '../../redux/actions/count'

// 容器组件要给UI组件传递状态和方法
// function mapStateToProps(state) {
//     return { sum: state }
// }
// function mapDispatchToProps(dispatch) {
//     return {
//         jia: (data) => {
//             dispatch(createIncrementAction(data))
//         },
//         jian: (data) => {
//             dispatch(createDecrementAction(data));
//         }
//     }
// }
// 定义UI组件
class Count extends Component {
    increment = () => {
        let { value } = this.select;
        console.log('value',value)
        this.props.jia(value*1);
    }
    decrement = () => {
        let { value } = this.select;
        this.props.jian(value*1);
    }
    render() {
        console.log('props!!!',this.props);
        return (
            <div>
                <h3>您输入的结果为：{this.props.sum}</h3>
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


// 暴露一个Count容器组件
export default connect(
    (state) => ({ sum: state.sum }),
    {
        jia: createIncrementAction,
        jian: createDecrementAction
    }
)
(Count);