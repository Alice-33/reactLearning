import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
    
    // 得有一个方法用来更新保存下来的用户
    render() {
        return (
            <div className="container">
                {/* 父想要给子传递参数，就要给父组件传递一个函数 */}
                <Search />
                {/* 然后将父组件中的参数传递给子组件，通过props的形式 */}
                <List />
            </div>
        )
    }
}
