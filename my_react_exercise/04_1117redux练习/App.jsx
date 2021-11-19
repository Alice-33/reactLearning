import React, { Component } from 'react'
import Exercise from './components/Exercise'
import Calculate from './components/Calculate'

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>11/17</h2>
        
        <br />
        <br />
        <Calculate/>
        <br />
        <br />
        <Exercise/>
      </div>
    )
  }
}
