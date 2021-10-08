import React, { Component } from 'react';
import PubSub from 'pubsub-js'
import axios from 'axios';

export default class Search extends Component {
    search = () => {
        // 发布消息
        console.log('search发布消息了');
        // 获取用户的输入
        // 给button绑定事件，但是要从input里面获取数据
        let { keywordEle: { value } } = this;
        console.log(value);
        // 发送网络请求——用axios【好像有点忘记了】
        // 发送请求前通知List更新状态
        PubSub.publish('atguigu',{isFirst:false,isLoading:true});
        axios.get(`http://localhost:3000/api1/search/users?q=${value}`
        ).then(response=>{
            console.log('成功了');
            // 保存下来已经得到的参数
            PubSub.publish('atguigu',{isLoading:false,users:response.data.items});
        },error=>{
            console.log('失败了');
            // 请求失败之后也要通知List更新
            PubSub.publish('atguigu',{isLoading:false,err:error.message});
        })
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索Github用户</h3>
                <div>
                    <input ref={c => this.keywordEle = c} type="text" placeholder="输入关键词点击搜索" />&nbsp;
                    <button onClick={this.search}>搜索</button>
                </div>
            </section>

        )
    }
}
