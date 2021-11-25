import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addPerson } from '../../redux/actions/person'

class Person extends Component {
    addPerson = () => {
        let { value } = this.input;
        this.props.addPerson(value)
        this.input.value = '';
    }
    render() {
        let { score, personArr } = this.props;
        return (
            <div>
                姓名<input ref={c => this.input = c} type="text" />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={this.addPerson}>点击添加成员</button>
                <h2>小组成员平均成绩：{score}</h2>
                {
                    personArr.length > 0 ? (
                        personArr.map((item, index) => {
                            return <li key={index}>{index}----{item}</li>
                        })
                    ) : ''
                }
            </div>
        )
    }
}

export default connect(
    (state) => ({ score: state.score, personArr: state.personArr }),
    {
        addPerson
    }
)(Person);