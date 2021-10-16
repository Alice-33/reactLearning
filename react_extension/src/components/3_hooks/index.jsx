import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// // 类式组件
// class Demo extends Component {
//     state={
//         count:0
//     }
//     // 使用Ref容器
//     myRef=React.createRef();
//     add=()=>{
//         this.setState((state)=>{
//             return {count:state.count+1}
//         })
//     }
//     unmount=()=>{
//         ReactDOM.unmountComponentAtNode(document.getElementById('root'));
//     }
//     show=()=>{
//         console.log(this.myRef.current.value);
//     }
//     // 自动加一
//     componentDidMount(){
//         this.timer=setInterval(() => {
//             this.setState(state=>({count:state.count+1}));
//         }, 1000);
//     }
//     // 卸载之前停掉定时器
//     componentWillUnmount(){
//         clearInterval(this.timer);
//     }
//     render() {
//         return (
//              <div>
//                 <input ref={this.myRef} type="text" name="" id="" />
//                 <h2>当前的求和结果为：{this.state.count}</h2>
//                 <button onClick={this.add}>点击加1</button>
//                 <button onClick={this.unmount}>卸载组件</button>
//                 <button onClick={this.show}>点击显示数据</button>
//              </div>
//         )
//     }
// }

// 函数式组件
function Demo() {
    // 返回的是数组，数组中包含2个元素，[状态，用于更新状态的方法]
    // useState(初始值)
    const [count, setCount] = React.useState(0);

    const myRef=React.useRef();

    // 调用的时候传入一个函数，这个函数就是一个生命周期钩子
    // 第二个参数
    React.useEffect(() => {
        // 组件一挂载就执行该函数，组件更新的时候也会执行
        let timer = setInterval(() => {
            setCount(count => count + 1);
        }, 1000);
        // 该函数返回的函数就相当于willUnmount
        return () => {
            clearInterval(timer);
        }
    }, [])

    function add() {
        // 第一种
        // setCount(count+1);
        // 第二种
        setCount(count => count + 1);
    }
    // 卸载组件
    function unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    }
    function show() {
       console.log(myRef.current.value);
    }

    return (
        <div>
            <input ref={myRef}type="text" name="" id="" />
            <h2>当前的求和结果为：{count}</h2>
            <button onClick={add}>点击加1</button>
            <button onClick={unmount}>卸载组件</button>
            <button onClick={show}>点击提示数据</button>
        </div>
    )
}

export default Demo;