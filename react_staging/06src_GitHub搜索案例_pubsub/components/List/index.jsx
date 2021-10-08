import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {
    state={
        users:[],
        // 是否是第一次访问
        isFirst:true,
        // 是否正在加载中
        isLoading:false,
        // 是否出现了错误的信息,存储请求相关的错误信息
        err:''
    }
    // List去订阅消息，List一放到页面上的时候就马上订阅消息
    componentDidMount(){
        // 初始化的事情
        // 订阅消息,这个函数有2个参数，一定要写，不想要可以用_占位
        this.token=PubSub.subscribe('atguigu',(_,stateObj)=>{
            console.log('list接受消息',stateObj);
            this.setState(stateObj);
        })
    }
    componentWillUnmount(){
        // 取消订阅
        PubSub.unsubscribe(this.token);
    }
    render() {
        let { users, isFirst, isLoading, err } = this.state;
        // avatar_url,html_url,login
        return (
            <div className="row">
                {
                    isFirst ? <h2>欢迎使用，输入关键字，点击进行查找</h2> :
                        (isLoading ? <h2>正在搜索中……</h2> :
                            (err != '' ? <h2 style={{color:'red'}}>{err}</h2> :
                                users.map((item) => {
                                    return (
                                        <div key={item.id} className="card">
                                            <a rel="noreferrer" href={item.html_url} target="_blank">
                                                <img alt='head_portrait' src={item.avatar_url} style={{ width: ' 100px' }} />
                                            </a>
                                            <p className="card-text">{item.login}</p>
                                        </div>
                                    )
                                })))

                }
            </div>
        )
    }
}
