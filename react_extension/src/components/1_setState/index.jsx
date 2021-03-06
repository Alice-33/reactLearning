import React, { Component } from 'react'

export default class Demo extends Component {
    state={
        count:0
    }
    add=()=>{
        // 对象式的setState
        // let {count}=this.state
        // this.setState({count:count+1},()=>{
            // console.log(this.state.count);
        // })
        
        // 函数式的setState
        this.setState((state,props)=>{
            // 返回值是一个对象
            return {count:state.count+1}
        })
    }
    render() {
        return (
            <div>
                <h2>当前求和为:{this.state.count}</h2>
                <button onClick={this.add}>点击加1</button>
            </div>
        )
    }
}
