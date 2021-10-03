// 这个是一个函数式的类
import React, { Component } from 'react';

import Header from './component/Header';
import List from './component/List';
import Footer from './component/Footer';
import './App.css';

export default class App extends Component {

    state = {
        todos: [
            { id: '001', name: 'eat', done: true },
            { id: '002', name: 'sleep', done: true },
            { id: '003', name: 'coding', done: false },
        ],
    }
    // 用于添加一个TODO，接受的是TODO对象
    addTodo = (todoObj) => {
        // 获取原todos
        let { todos } = this.state;
        let newTodos = [todoObj, ...todos];
        this.setState({ todos: newTodos });
    }
    upDateTodos = (id, done) => {
        // 获取原todos
        let { todos } = this.state;
        let newTodos = todos.map(obj => {
            if (obj.id == id) {
                return { ...obj, done }
            }
            return obj;
        })
        this.setState({ todos: newTodos });
    }
    deleteTodos = (id) => {
        let { todos } = this.state;
        let newTodos = todos.filter((todo) => {
            return todo.id != id;
        })
        this.setState({ todos: newTodos });
    }
    checkAllTodos = (done) => {
        let { todos } = this.state;
        let newTodos = todos.map(obj => {
            return { ...obj, done }
        })
        this.setState({ todos: newTodos });
    }
    clearAllDone=()=>{
        let { todos } = this.state;
        let newTodos = todos.filter((todo) => {
            return todo.done==false;
        })
        this.setState({ todos: newTodos });
    }
    render() {
        const { todos } = this.state;
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header todos={todos} addTodo={this.addTodo} />
                    <List deleteTodos={this.deleteTodos} todos={todos} upDateTodos={this.upDateTodos} />
                    <Footer clearAllDone={this.clearAllDone} todos={todos} checkAllTodos={this.checkAllTodos}/>
                </div>
            </div>
        )
    }
}
