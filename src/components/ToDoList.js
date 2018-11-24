import React, { Component } from 'react';

import ToDo from './ToDo';

export default class ToDoList extends Component {
    state = {
        todos: []
    };
    onCompleteHandler = () => {};
    onRemoveHandler = () => {};
    onInputChangeHandler = () => {};
    render() {
        const todos = this.state.todos.map(({ text }) => (
            <ToDo
                text={text}
                complete={this.onCompleteHandler}
                remove={this.onRemoveHandler}
            />
        ));
        return (
            <>
                <h3>ToDo List</h3>
                <input onChange={this.onInputChangeHandler} />
                <button>ADD</button>
                <ul>{todos}</ul>
            </>
        );
    }
}
