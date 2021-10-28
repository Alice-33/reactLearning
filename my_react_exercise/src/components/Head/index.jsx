import React, { Component } from 'react'
import { Route, withRouter } from 'react-router'
import Talking from '../Talking'
import './index.css'
class Head extends Component {
    goFirst=()=>{
        this.props.history.push('./talking')
    }
    render() {
        return (
            <div className='head-container'>
                <button className='head-email'>邮箱</button>
                <button className='head-title' onClick={this.goFirst}>react学习首页</button>
                <Route path='./talking' component={Talking}/>
                <button className='head-menu'>菜单</button>
            </div>
        )
    }
}
export default withRouter(Head);