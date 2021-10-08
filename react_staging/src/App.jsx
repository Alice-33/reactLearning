import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

export default class App extends Component {

    // 得有一个方法用来更新保存下来的用户
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* 原生HTML中靠a标签进行页面的跳转 */}
                            {/* <a className="list-group-item active" href="./about.html">About</a>
          <a className="list-group-item" href="./home.html">Home</a> */}
                            {/* 在react中靠路由链接切换组件 ,to表示要跳转到哪里*/}
                            {/* 编写路由链接 */}
                            <Link className="list-group-item" to='/about'>About</Link>
                            <Link className="list-group-item" to='/home'>Home</Link>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由 */}
                                <Route path='/about' component={About} />
                                <Route path='/home' component={Home} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
