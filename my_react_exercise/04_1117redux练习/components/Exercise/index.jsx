import React, { Component } from 'react'

export default class Exercise extends Component {
    state={
        content:''
    }
    importModuleA=()=>{
        import('../moduleA.js').then(({moduleA})=>{
           this.setState({content:moduleA});
        }).catch(err=>{
            console.log('出错了！')
        })
    }
    
    render() {
        return (
            <div>
                <button onClick={this.importModuleA}>点击加载moduleA</button>
                <h3>{this.state.content}</h3>
            </div>
        )
    }
}
