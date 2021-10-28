import React, { Component } from 'react'
import { NavLink,Route,Redirect } from 'react-router-dom'
import './index.css'

export default class Talking extends Component {
    render() {
        return (
            <div className='talk-container'>
                <div className='talk-title'>
                    <NavLink to='/talking/talknew' activeClassName='highlight' className="list-group-item">最新</NavLink>
                    <NavLink to='/talking/talkhot' activeClassName='highlight' className="list-group-item">热门</NavLink>
                    <NavLink to='/talking/talklike' activeClassName='highlight' className="list-group-item">关注</NavLink>
                </div>
                <div className='talk-content'>
                    <Route path='/talking/talknew' component={TalkNew}/>
                    <Route path='/talking/talkhot' component={TalkHot}/>
                    <Route path='/talking/talklike' component={TalkLike}/>
                    <Redirect to='/talking/talknew'/>
                </div>
            </div>
        )
    }
}
class TalkNew extends Component {
    render() {
        return (
            <div>
                最新消息
            </div>
        )
    }
}
class TalkHot extends Component {
    render() {
        return (
            <div>
                热门消息
            </div>
        )
    }
}

class TalkLike extends Component {
    render() {
        return (
            <div>
                关注消息
            </div>
        )
    }
}
