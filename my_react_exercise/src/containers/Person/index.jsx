import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPerson } from '../../redux/action/person'
class Person extends Component {
    addPerson = () => {
        let { value } = this.personNode;
        this.props.addPerson(value);
    }
    render() {
        let { peopleArr, result } = this.props;
        console.log('people', this.props);
        return (
            <div style={{ width: '400px', backgroundColor: 'skyblue' }}>
                姓名：<input ref={c => this.personNode = c} type="text" name="" id="" />
                <button onClick={this.addPerson}>点击添加人员</button>
                <h3>小组成员姓名：</h3>
                {
                    peopleArr.length>0?peopleArr.map((item,index)=>{
                        return <li key={index}>{index}----{item}</li>
                    }):''
                }
                <h3>小组平均成绩：{result}</h3>
            </div>
        )
    }
}

export default connect(
    (state) => ({
        result: state.count,
        peopleArr: state.person
    }),
    {
        addPerson
    }
)(Person)