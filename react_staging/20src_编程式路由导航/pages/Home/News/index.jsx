import React, { Component } from 'react'

export default class News extends Component {
    componentDidMount(){
        setTimeout(() => {
            // 2s钟到点之后进行跳转
            this.props.history.push('/home/message')
        }, 2000);
    }
    render() {
        // console.log('Home接收到的props',this.props);
        return (
            <ul>
                <li>news001</li>
                <li>news002</li>
                <li>news003</li>
            </ul>
        )
    }
}
