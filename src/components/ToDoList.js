import React, { Component } from 'react';

import ToDo from './ToDo';

export default class ToDoList extends Component {
    state = {
        todos: [],
        todo: { text: '', key: '', done: false }
    };
    get taskToComplete() {
        return this.state.todos.filter(({ done }) => !done).length;
    }
    completeHandler = key => {
        const updatedItems = this.state.todos.map(todo => {
            if (todo.key === key) {
                todo.done = true;
            }
            return todo;
        });
        this.setState({ todos: updatedItems });
    };
    removeHandler = key => {
        const todos = this.state.todos.filter(todo => todo.key !== key);
        this.setState({ todos });
    };
    onInputChangeHandler = e => {
        const todo = { text: e.target.value, id: Date.now(), done: false };
        this.setState({ todo });
    };
    addToDoHandler = e => {
        e.preventDefault();
        const newTodo = this.state.todo;
        if (newTodo.text !== '' || this.taskToComplete < 10) {
            const items = [...this.state.todos, newTodo];
            this.setState({
                todos: items,
                todo: { text: '', key: '', done: false }
            });
        }
    };
    render() {
        const todos = this.state.todos.map(({ text, key, done }) => (
            <ToDo
                key={key}
                text={text}
                complete={() => this.completeHandler(key)}
                remove={() => this.removeHandler(key)}
                done={done}
            />
        ));
        return (
            <>
                <h3>ToDo List</h3>
                <h2>Task to complete: {this.taskToComplete}</h2>
                <input onChange={this.onInputChangeHandler} />
                <button onClick={this.addToDoHandler}>ADD</button>
                <ul>{todos}</ul>
            </>
        );
    }
}
