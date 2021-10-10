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
                                    <Link to={`/home/message/detail/?id=${item.id}&title=${item.title}`}>{item.title}</Link>
                                </li>
                            );
                        })
                    }
                </ul>
                <hr />
                {/* 注册路由 */}
                <Switch>
                    {/* 声明接收params参数,这样组件中就可以接收到参数了 */}
                    <Route path='/home/message/detail/:id/:title' component={Detail} />

                    {/* search参数无须声明接收，正常注册路由即可 */}
                    <Route path='/home/message/detail' component={Detail} />
                </Switch>

            </div>
        )
    }
}
