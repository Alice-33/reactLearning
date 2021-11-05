import React, { Component } from 'react'
import { NavLink,Route,Redirect } from 'react-router-dom'
import Learning from '../Learning'
import Talking from '../Talking'
import Shopping from '../Shopping'
import Mine from '../Mine'
import './index.css'
export default class Bottom extends Component {
    render() {
        return (
            <div className='bottom-container'>
                <div className='bottom-content'>
                    <Route  path='/learning' component={Learning}/>
                    <Route  path='/talking' component={Talking}/>
                    <Route  path='/shopping' component={Shopping}/>
                    <Route  path='/mine' component={Mine}/>
                    <Redirect to='/talking'/>
                </div>
                <div className='bottom-footer'>
                    <NavLink to='/learning' activeClassName='highlight' className="list-group-item" >教程</NavLink>
                    <NavLink to='/talking' activeClassName='highlight' className="list-group-item" >讨论</NavLink>
                    <NavLink to='/shopping' activeClassName='highlight' className="list-group-item" >商城</NavLink>
                    <NavLink to='/mine' activeClassName='highlight' className="list-group-item" >我的</NavLink>
                </div>
            </div>
        )
    }
}
