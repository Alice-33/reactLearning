import React, { Component } from 'react'
import Head from './components/Head'
import Bottom from './components/Bottom'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className='app-container'>
        <Head/>
        <Bottom/>
      </div>
    )
  }
}
