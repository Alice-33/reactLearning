import React, { Component } from 'react';
import PubSub from 'pubsub-js'
// import axios from 'axios';

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
        PubSub.publish('atguigu', { isFirst: false, isLoading: true });
        //#region  使用axios进行请求
        // axios.get(`http://localhost:3000/api1/search/users2?q=${value}`
        // ).then(response=>{
        //     console.log('成功了');
        //     // 保存下来已经得到的参数
        //     PubSub.publish('atguigu',{isLoading:false,users:response.data.items});
        // },error=>{
        //     console.log('失败了');
        //     // 请求失败之后也要通知List更新
        //     PubSub.publish('atguigu',{isLoading:false,err:error.message});
        // })
        // 使用fetch发送请求——未优化
        // fetch(`http://localhost:3000/api1/search/users2?q=${value}`
        // ).then(response => {
        //     // json是一个方法，返回的是promise对象。我们想要的数据就在这里面
        //     console.log('联系服务器成功');
        //     return response.json();
        // }, error => {
        //     console.log('联系服务器失败');
        //     // 返回一个初始化状态的promise对象，就不会再往下面走了
        // }).then(response => {
        //     console.log('获取数据成功');
        // }, error => {
        //     console.log('获取数据失败');
        // }).catch(err=>{
        //     console.log(err);
        // })
        //#endregion
        // 使用fetch发送请求——优化->使用async await
        // await等到的是成功的结果
        (async () => {
            try {
                let response = await fetch(`/api1/search/users2?q=${value}`);
                let data = await response.json();
                console.log('怎么就是不对', data)
                console.log('还是不太对');
                PubSub.publish('atguigu', { isLoading: false, users: data.items });
            } catch (error) {
                console.log('请求出错', error);
                PubSub.publish('atguigu', { isLoading: false, err: error.message });
            }
        })();
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
