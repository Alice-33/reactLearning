import React, { Component } from 'react'
import { NavLink, Route ,Redirect} from 'react-router-dom';
import { message, Button } from 'antd';
import Chinese from '../Chinese';
import Math from '../Math';
import English from '../English';
import FirstPage from '../FirstPage';
import './index.css';
export default class Content extends Component {
    study = () => {
        message.success('forever love studying!');
    }
    render() {
        return (
            <div className='content-container'>
                <div className='content-right'>
                    <Route path='/chinese' component={Chinese} />
                    <Route path='/math' component={Math} />
                    <Route path='/english' component={English} />
                    <Route path='/firstpage' component={FirstPage} />
                    <Redirect to='/firstpage'/>
                </div>
                <div className='content-left'>
                    <Button className='content-left-title'type="primary" onClick={this.study}>
                        我永远爱学习
                    </Button>
                    <NavLink activeClassName='highlight' className="list-group-item" to='/chinese'>语文</NavLink>
                    <NavLink activeClassName='highlight' className="list-group-item" to='/math'>数学</NavLink>
                    <NavLink activeClassName='highlight' className="list-group-item" to='/english'>英语</NavLink>

                </div>
            </div>
        )
    }
}
