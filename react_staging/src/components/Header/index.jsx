import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Header extends Component {
    goBack=()=>{
        this.props.history.goBack();
    }
    go=()=>{
        this.props.history.go(1);
    }
    goForward=()=>{
        this.props.history.goForward();
    }
    render() {
        return (
            <div>
                <div className="page-header"><h2>React Router Demo</h2></div>
                <button onClick={this.goBack}>回退</button>
                <button onClick={this.go}>前进1</button>
                <button onClick={this.goForward}>前进2</button>
                <hr />
            </div>
        )
    }
}

export default withRouter(Header)