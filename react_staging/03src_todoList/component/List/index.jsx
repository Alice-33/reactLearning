import React, { Component } from 'react'
// import PropTypes from 'prop-types;'
import Item from '../Item'
import './index.css'

export default class List extends Component {
    // 对接收的参数进行类型及必要性的限制
    // static propTypes={
    //     todos:PropTypes.array.isRequired,
    //     upDateTodos:PropTypes.func.isRequired
    // }
    render() {
        const { todos,upDateTodos,deleteTodos } = this.props;
        return (
            <ul className="todo-main">
                {
                    todos.map((todo) =>
                        // 这里一旦有很多个变量，传起来就非常的麻烦
                        // <Item key={todo.id} id={todo.id} name={todo.name} done={todo.done}/>
                        <Item key={todo.id} {...todo} upDateTodos={upDateTodos} deleteTodos={deleteTodos}/>
                    )
                }
            </ul>

        )
    }
}
