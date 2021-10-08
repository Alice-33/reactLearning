import React, { Component } from 'react';
import axios from 'axios';

export default class Search extends Component {
    search = () => {
        // 获取用户的输入
        // 给button绑定事件，但是要从input里面获取数据
        let { keywordEle: { value } } = this;
        console.log(value);
        // 发送网络请求——用axios【好像有点忘记了】
        // 发送请求前通知app更新状态
        this.props.updateAppState({isFirst:false,isLoading:true});
        axios.get(`http://localhost:3000/api1/search/users?q=${value}`
        ).then(response=>{
            console.log('成功了');
            console.log(response.data.items);
            // 保存下来已经得到的参数
            this.props.updateAppState({isLoading:false,users:response.data.items});
        },error=>{
            console.log('失败了');
            console.log(error)
            // 请求失败之后也要通知APP更新
            this.props.updateAppState({isLoading:false,err:error.message});
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
