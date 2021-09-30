// 创建“外壳”组件
// 引入React.Component
import React, { Component } from 'react';
import Hello from './components/Hello';
import Welcome from './components/Welcome';
// 创建并暴露APP组件
export default class App extends Component {
    render() {
        return (
            // 把文字放到组件中
            <div>
                <Hello />
                <Welcome />
            </div>
        )
    }
}