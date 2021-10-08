import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
    // 把共同的数据放在父组件中
    state={
        users:[],
        // 是否是第一次访问
        isFirst:true,
        // 是否正在加载中
        isLoading:false,
        // 是否出现了错误的信息,存储请求相关的错误信息
        err:''
    }
    // 得有一个方法用来更新保存下来的用户
    updateAppState=(stateObj)=>{
        this.setState(stateObj);
        console.log('现在的结果是',this.state.users)
    }
    render() {
        return (
            <div className="container">
                {/* 父想要给子传递参数，就要给父组件传递一个函数 */}
                <Search updateAppState={this.updateAppState}/>
                {/* 然后将父组件中的参数传递给子组件，通过props的形式 */}
                <List {...this.state}/>
            </div>
        )
    }
}
