import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createAddPersonAction } from '../../redux/actions/person'

class Person extends Component {
    addPerson = () => {
        let newPerson = this.nameNode.value;
        console.log('person', newPerson)
        this.props.addPerson(newPerson);
    }
    render() {
        console.log('this.props是什么',this.props)
        let { people } = this.props;
        return (
            <div>
                名字：<input ref={c => this.nameNode = c} type="text" name="" id="" />
                <button onClick={this.addPerson}>添加人员</button>
                <h3>当前求和为：{this.props.sum}</h3>
                {
                    people.length > 0 ?
                        (people.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })) : ''
                }
            </div>
        )
    }
}

export default connect(
    (state) => ({ people: state.people ,sum:state.sum}),
    {
        addPerson: createAddPersonAction
    }
)(Person)