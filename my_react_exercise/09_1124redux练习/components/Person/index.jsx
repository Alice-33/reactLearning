import React, { Component } from 'react'
import {addPerson} from '../../redux/actions/person'
import store from '../../redux/store'

export default class Person extends Component {
    addPerson=()=>{
        let {value}=this.input;
        store.dispatch(addPerson(value));
        this.input.value='';
    }
    render() {
        let {personArr,count}=store.getState();
        return (
            <div>
                输入姓名：<input ref={c=>this.input=c} type="text" name="" id="" />
                &nbsp;&nbsp;&nbsp;
                <button onClick={this.addPerson}>添加小组成员</button>
                <h3>小组成员的平均成绩为{count}</h3>
                {
                    personArr.length>0?
                    (
                        personArr.map((item,index)=>{
                            return (
                                <li key={index}>{index+1}----{item}</li>
                            )
                        })
                    ):''
                }
            </div>
        )
    }
}
