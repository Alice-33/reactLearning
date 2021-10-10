import React, { Component } from 'react'

const data=[
    {id:1,content:'你好，中国'},
    {id:2,content:'你好，山东'},
    {id:3,content:'你好，青岛'}
]
export default class Detail extends Component {
    render() {
        console.log(this.props)
        const {id,title}=this.props.match.params;
        const findRes=data.find((item)=>{
            return item.id==id;
        })
        return (
            <div>
                <ul>
                    <li>ID:{id}</li>                   
                    <li>TITLE:{title}</li>                   
                    <li>CONTENT:{findRes.content}</li>                   
                </ul>
            </div>
        )
    }
}
