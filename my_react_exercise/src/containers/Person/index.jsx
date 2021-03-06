import React, { Component } from 'react'
import {addPerson} from '../../redux/actions/person';
import {connect} from 'react-redux';

class Person extends Component {
    addPerson=()=>{
        if(this.input.value==='')return;
        this.props.addPerson(this.input.value);
        this.input.value='';
    }
    render() {
        let {result,personArr}=this.props;
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

export default connect(
    (state)=>({result:state.result,personArr:state.personArr}),
    {
        addPerson
    }
)(Person);