import React from 'react';
import './index.css'
export default class Footer extends React.Component {
    handleCheckAll=(event)=>{
        this.props.checkAllTodos(event.target.checked);
    }
    handleClearAllDone=()=>{
        console.log('清除完成的');
        this.props.clearAllDone();
    }
    render() {
        const { todos } = this.props;
        // 已经完成的
        let doneCount = todos.reduce((pre, cur) => {
            return pre + (cur.done ? 1 : 0);
        }, 0)
        // 总数
        let total = todos.length;
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox"
                        checked={doneCount==0?false:(doneCount == total ? true : false)}
                        onChange={this.handleCheckAll}
                    />
                </label>
                <span>
                    <span>已完成{doneCount}</span> / 全部{total}
                </span>
                <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
            </div>

        )
    }
}