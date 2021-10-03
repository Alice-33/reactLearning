import React, { Component } from 'react'
// import PropTypes from 'prop-types;'
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {
    // 对接收的参数进行类型及必要性的限制
    // static propTypes={
    //     addTodo:PropTypes.func.isRequired
    // }
    handleKeyUp = (event) => {
        const { todos } = this.props;
        // 如果这个按键是enter，就表示输入
        if (event.keyCode == 13) {
            if (event.target.value.trim() == '') {
                alert('输入不能为空');
                return;
            }
            let todo = { id: todos.length + 1 + '', name: event.target.value, done: false }
            this.props.addTodo(todo);
            event.target.value = '';
            return event.target.value;
        }
    }
    render() {
        return (
            <div className="todo-header">
                {/* onKeyUp表示按键真正的按完了 */}
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        )
    }
}
