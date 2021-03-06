import React, { Component } from 'react'
import { NavLink,Switch,Route,Redirect } from 'react-router-dom'
import Message from './Message'
import News from './News'

export default class Home extends Component {
    render() {
        // console.log('Home接收到的props',this.props);
        return (
            <div>
                <h3>
                    我是Home的内容
                </h3>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <NavLink className="list-group-item" to="/home/news">News</NavLink>
                        </li>
                        <li>
                            <NavLink className="list-group-item" to="/home/message">Message</NavLink>
                        </li>
                    </ul>
                    <Switch>
                        <Route path='/home/news' component={News}></Route>
                        <Route path='/home/message' component={Message}></Route>
                        <Redirect to='/home/news'></Redirect>
                    </Switch>
                </div>
            </div>
        )
    }
}
