import React, { Component } from 'react'
import Child from './Child'
export default class Parent extends Component {
    state={
        // 用于标识子组件是否产生错误
        hasError:''
    }
    // 当parent的子组件出现报错时，会触发调用，并携带错误信息
    static getDerivedStateFromError(error){
        console.log(error);
        // 返回状态对象，hasError是否有错误
        return{hasError:error}
    }
    componentDidCatch(){
        // 一般在这个钩子里面统计错误次数，发送给后台，用于bug解决
        console.log('渲染组件出错');
    }
    render() {
        return (
            <div>
                <h2>Parent组件</h2>
                {
                    this.state.hasError?<h2>网络出错，稍后再试</h2>:<Child/>
                }
            </div>
        )
    }
}
