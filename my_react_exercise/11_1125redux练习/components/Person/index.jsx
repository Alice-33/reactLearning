import React, { Component } from 'react'
import {addPerson} from '../../redux/actions/person';
import store from '../../redux/store';

export default class Person extends Component {
    addPerson=()=>{
        if(this.input.value==='')return;
        store.dispatch(addPerson(this.input.value));
        this.input.value='';
    }
    render() {
        console.log(store.getState())
        let {result,personArr}=store.getState();
        return (
            <div>
                姓名：<input ref={c=>this.input=c}/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={this.addPerson}>点击添加</button>
                <br />
                <h3>小组成员的平均成绩为：{result}</h3>
                {
                    personArr.map((item,index)=>{
                        return <li key={index}>{index+1}-----{item}</li>
                    })
                }
            </div>
        )
    }
}
