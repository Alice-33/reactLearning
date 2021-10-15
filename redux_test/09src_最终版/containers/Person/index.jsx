import React, { Component } from 'react'
import {connect} from 'react-redux';
import  {addPerson} from '../../redux/actions/person';
class Person extends Component {
    addPerson=()=>{
        let name=this.nameInput.value.trim();
        let age=this.ageInput.value.trim();
        if(name==='' || age==='')return;
        let newPerson={id:this.props.persons.length+1,name,age};
        this.props.addPerson(newPerson);
        this.nameInput.value='';
        this.ageInput.value='';
    }
    render() {
        return (
            <div>
                <h2>Person 组件</h2>
                姓名：<input ref={c=>this.nameInput=c} type="text" name="" id="" />
                年龄：<input ref={c=>this.ageInput=c} type="text" name="" id="" />
                <button onClick={this.addPerson}>添加</button>
                <h4>当前的求和值为：{this.props.count}</h4>
                {
                    this.props.persons.map((item,index)=>{
                        return <li key={index}>姓名：{item.name} 年龄：{item.age}</li>
                    })
                }
            </div>
        )
    }
}
export default connect(
    // 这个是redux帮忙保存的状态对象
    state=>({
        persons:state.persons,
        count:state.count
    }),
    {addPerson}
)(Person)