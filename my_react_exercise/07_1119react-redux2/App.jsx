import React, { Component } from 'react'
import Count from './containers/Count'
import Person from './containers/Person'
export default class App extends Component {
    render() {
        return (
            <div>
                <h2>11/19今日练习react-redux</h2>
                <br />
                <Count/>
                <br />
                <Person/>
            </div>
        )
    }
}
