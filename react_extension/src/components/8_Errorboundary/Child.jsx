import React, { Component } from 'react'

export default class Child extends Component {
    state={
        users:
        // [
        //     {id:1,name:'tom',age:12},
        //     {id:2,name:'amy',age:18},
        //     {id:3,name:'jack',age:17},
        // ],
        'abc'
    }
    render() {
        return (
            <div>
                <h2>Child 组件</h2>
                {
                    this.state.users.map((obj)=>{
                        return <li key={obj.id}>name={obj.name},age={obj.age}</li>
                    })
                }
            </div>
        )
    }
}
