import React, { Component } from 'react'
import First from './components/First'
import Second from './components/Second'
import Third from './components/Third'
import { withRouter, Route, Redirect } from 'react-router-dom'
import { Steps } from 'antd';
import PubSub from 'pubsub-js'

import 'antd/dist/antd.css';
import './App.css'
const { Step } = Steps;
const routePath = [
  '/first',
  '/second',
  '/third'
]
class App extends Component {
  state = {
    current: 0,
  };
  //刚开始挂载就马上订阅消息
  componentDidMount() {
    PubSub.subscribe('changeStep', (_, stateObj) => {
      console.log('接收消息', stateObj);
      const { current } = stateObj;
      this.setState({ current })
    })
  }
  onChange = current => {
    console.log('onChange:', current);
    this.setState({ current });
    this.props.history.push(routePath[current]);
  };
  render() {
    const { current } = this.state;
    return (
      <div className='app-container'>
        <div className='app-title'>
          <Steps
            current={current}
            // onChange={this.onChange}
          >
            <Step title="个人信息" description="Personal information" />
            <Step title="其他信息" description="Other information" />
            <Step title="信息汇总" description="All information" />
          </Steps>
        </div>

        <div className='app-content'>
          <Route path='/first' component={First} />
          <Route path='/second' component={Second} />
          <Route path='/third' component={Third} />
          <Redirect to='/first' />
        </div>
      </div>
    )
  }
}
export default withRouter(App)