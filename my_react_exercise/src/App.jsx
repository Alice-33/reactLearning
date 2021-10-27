import React, { Component } from 'react'
import Head from './components/Head'
import Content from './components/Content'
import './App.css'
import 'antd/dist/antd.css';
export default class App extends Component {
  render() {
    return (
      <div className='app-container'>
        <Head/>
        <Content/>
      </div>
    )
  }
}
