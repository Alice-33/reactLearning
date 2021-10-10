import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
    render() {
        return (
            <div>
                {/* 可以这么写，但是比较麻烦 */}
                {/* <NavLink activeClassName='highlight' className="list-group-item" 
                        {...this.props}>{this.props.children}</NavLink> */}
                {/* 自结束，可以把children写在里面 */}
                <NavLink activeClassName='highlight' className="list-group-item" {...this.props} />
            </div>
        )
    }
}
