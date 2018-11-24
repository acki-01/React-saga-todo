import React, { Component } from 'react';
import { connect } from 'react-redux';

import ToDo from './ToDo';
import * as actionTypes from '../store/actions';

class ToDoList extends Component {
    state = {
        text: ''
    };
    get taskToComplete() {
        return this.props.todos.filter(({ done }) => !done).length;
    }
    completeHandler = key => {
        const updatedItems = this.props.todos.map(todo => {
            if (todo.key === key) {
                todo.done = true;
            }
            return todo;
        });
        this.setState({ todos: updatedItems });
    };
    removeHandler = key => {
        const todos = this.props.todos.filter(todo => todo.key !== key);
        this.setState({ todos });
    };
    onInputChangeHandler = e => {
        const { value } = e.target;
        this.setState({ text: value });
    };
    addToDoHandler = () => {
        const newToDo = { text: this.state.text, key: Date.now(), done: false };
        if (newToDo.text !== '' || this.taskToComplete < 10) {
            this.props.onToDoAdded(newToDo);
        }
    };
    render() {
        const todos = this.props.todos.map(({ text, key, done }) => (
            <ToDo
                key={key}
                text={text}
                complete={() => this.props.onMarkAsDoneToDo(key)}
                remove={() => this.props.onToDoRemoved(key)}
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

const mapStateToProps = state => {
    return {
        todos: state.todos
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onToDoAdded: newToDo =>
            dispatch({ type: actionTypes.ADD_TODO, newToDo }),
        onMarkAsDoneToDo: toDoKey =>
            dispatch({ type: actionTypes.MARK_AS_DONE_TODO, toDoKey }),
        onToDoRemoved: toDoKey =>
            dispatch({ type: actionTypes.REMOVE_TODO, toDoKey })
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoList);
