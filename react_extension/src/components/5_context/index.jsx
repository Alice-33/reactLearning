import React, { Component } from 'react'
import './index.css'

const MyContext = React.createContext();
const { Provider, Consumer } = MyContext;
export default class A extends Component {
    state = {
        name: 'Tom',
        age: 12
    }
    render() {
        const { name, age } = this.state;
        return (
            <div className='parent'>
                <h2>A组件</h2>
                <h4>用户名是{name}</h4>
                {/* 这样B组件及其子组件都能收到用户名字了 */}
                <Provider value={{ name, age }}>
                    <B />
                </Provider>
            </div>
        )
    }
}
class B extends Component {
    render() {
        return (
            <div className='child'>
                <h2>B组件</h2>
                <C />
            </div>
        )
    }
}
// class C extends Component {
//     static contextType=MyContext;
//     render() {
//         return (
//             <div className='grandchild'>
//                 <h2>C组件</h2>
//                 {/* 用的时候要声明一下 */}
//                 <h4>从A组件接收到的用户名是：{this.context.name}</h4>
//             </div>
//         )
//     }
// }

function C() {
    return (
        <div className='grandchild'>
            <h2>C组件</h2>
            {/* 用的时候要声明一下 */}
            <h4>从A组件接收到的用户名是：</h4>
            <Consumer>
                {value => `${value.name}`}
            </Consumer>
        </div>
    )
}