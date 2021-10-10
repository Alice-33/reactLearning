import React, { Component } from 'react'
import Detail from './Detail';
import { Link,Switch,Route} from 'react-router-dom';

export default class Message extends Component {
    state = {
        messageArr: [
            { id: 1, title: '消息1' },
            { id: 2, title: '消息2' },
            { id: 3, title: '消息3' }
        ]
    }
    replaceShow=(id,title)=>{
        // replace跳转+携带params参数
        // this.props.history.replace(`/home/message/detail/${id}/${title}`,)

        // replace跳转+携带search参数
        // this.props.history.replace(`/home/message/detail/?id=${id}&title=${title}`,)

        // replace跳转+携带state参数
        this.props.history.replace(`/home/message/detail`,{id,title})

    }
    pushShow=(id,title)=>{
        // push跳转+携带params参数
        // this.props.history.push(`/home/message/detail/${id}/${title}`,)
        
        // push跳转+携带params参数
        // this.props.history.push(`/home/message/detail/?id=${id}&title=${title}`,)

        // push跳转+携带state参数
        this.props.history.push(`/home/message/detail`,{id,title})

    }
    goBack=()=>{
        this.props.history.goBack();
    }
    go=()=>{
        this.props.history.go(1);
    }
    goForward=()=>{
        this.props.history.goForward();
    }
    render() {
        const { messageArr } = this.state;
        return (
            <div>
                <ul>
                    {
                        messageArr.map((item) => {
                            return (
                                <li key={item.id}>
                                    {/* 向路由组件携带params参数 */}
                                    {/* <Link to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link> */}
                                    {/* 向路由组件携带search参数 */}
                                    {/* <Link to={`/home/message/detail/?id=${item.id}&title=${item.title}`}>{item.title}</Link> */}

                                    {/* 向路由组件中传递state参数 */}
                                    <Link to={{pathname:'/home/message/detail',state:{id:item.id,title:item.title}}}>{item.title}</Link>
                                    &nbsp;&nbsp;
                                    <button onClick={()=>this.pushShow(item.id,item.title)}>push查看</button>
                                    &nbsp;&nbsp;
                                    <button onClick={()=>this.replaceShow(item.id,item.title)}>replace查看</button>
                                </li>
                            );
                        })
                    }
                </ul>
                <hr />
                {/* 注册路由 */}
                <Switch>
                    {/* 声明接收params参数,这样组件中就可以接收到参数了 */}
                    {/* <Route path='/home/message/detail/:id/:title' component={Detail} /> */}

                    {/* search参数无须声明接收，正常注册路由即可 */}
                    <Route path='/home/message/detail' component={Detail} />

                    {/* state参数无须声明接收，正常注册路由即可 */}
                    {/* <Route path='/home/message/detail' component={Detail} /> */}
                </Switch>
                <hr />
                <button onClick={this.goBack}>回退</button>
                <button onClick={this.go}>前进1</button>
                <button onClick={this.goForward}>前进2</button>
            </div>
        )
    }
}
