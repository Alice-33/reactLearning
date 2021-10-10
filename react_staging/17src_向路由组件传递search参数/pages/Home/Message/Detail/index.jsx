import React, { Component } from 'react'
import qs from 'querystring';

const data = [
    { id: 1, content: '你好，中国' },
    { id: 2, content: '你好，山东' },
    { id: 3, content: '你好，青岛' }
]

// let obj={name:'tom',age:18};//name=tom&age=18
// console.log(qs.stringify(obj));

// let str='name=Alice&age=18';
// console.log(qs.parse(str));

export default class Detail extends Component {
    render() {
        console.log(this.props)
        // 接收params参数
        // const {id,title}=this.props.match.params;

        // 接收search参数
        const { search } = this.props.location;
        // 不slice的话前面就会一直带着？
        console.log(search,qs.parse(search.slice(1)));
        const { id, title } = qs.parse(search.slice(1));
        const findRes = data.find((item) => {
            return item.id == id;
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
