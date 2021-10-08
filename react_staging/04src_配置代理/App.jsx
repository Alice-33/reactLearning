import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {
    getStudentData=()=>{
        // 发送axios请求
        axios.get(
            // 这里要修改成3000,但是3000也是public这个目录
            // 并不是所有的都转发给5000，只有3000下没有才转发
            'http://localhost:3000/api1/students'
        ).then(resoponse=>{
            console.log('成功了',resoponse.data);
        },error=>{
            console.log('失败了',error);
        })
    }
    getCarData=()=>{
        // 发送axios请求
        axios.get(
            'http://localhost:5000/api2/cars'
        ).then(resoponse=>{
            console.log('成功了',resoponse.data);
        },error=>{
            console.log('失败了',error);
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.getStudentData}>点我获取学生数据</button>
                <button onClick={this.getCarData}>点我获取汽车数据</button>
            </div>
        )
    }
}
