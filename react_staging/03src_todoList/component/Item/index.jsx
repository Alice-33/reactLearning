import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
    state = { mouse: false };
    handleMouse = (flag) => {
        // 带小括号的时候要返回的是一个函数
        return () => {
            this.setState({ mouse: flag });
        }
    }
    handleCheck=(id)=>{
        return(event)=>{
            this.props.upDateTodos(id,event.target.checked);
        }
    }
    handleDelete = (id) => {
        // 带小括号的时候要返回的是一个函数
        if(window.confirm('确定删除吗？'))this.props.deleteTodos(id)
    }
    render() {
        const { id, name, done } = this.props;
        const { mouse } = this.state;
        return (
            <div>
                <li style={{ background: mouse ? '#ddd' : 'white' }}
                    onMouseLeave={this.handleMouse(false)}
                    onMouseEnter={this.handleMouse(true)}>
                    <label>
                        {/* defaultChecked是允许后续进行修改的，checked就写死了那就要写change */}
                        <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                        <span>{name}</span>
                    </label>
                    <button
                        className="btn btn-danger"
                        onClick={()=>this.handleDelete(id)}
                        style={{ display: mouse?'block':'none'}}>删除</button>
                </li>
            </div>
        )
    }
}
