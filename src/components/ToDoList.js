import React, { Component } from 'react';
import { connect } from 'react-redux';

import ToDo from './ToDo';
import * as toDoActions from '../store/actions/todo';

class ToDoList extends Component {
    state = {
        text: ''
    };
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
        const { text } = this.state;
        if (text !== '' && !this.props.isFullList) {
            const newToDo = {
                text,
                key: Date.now(),
                done: false
            };
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
                <button
                    onClick={this.addToDoHandler}
                    disabled={
                        this.props.buttonDisabled || this.props.isFullList
                    }
                >
                    ADD
                </button>
                <ul>{todos}</ul>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos,
        isFullList: state.todos.filter(({ done }) => !done).length >= 10,
        buttonDisabled: state.buttonDisabled
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onToDoAdded: newToDo => dispatch(toDoActions.initAddToDo(newToDo)),
        onMarkAsDoneToDo: toDoKey =>
            dispatch(toDoActions.initMarkAsDone(toDoKey)),
        onToDoRemoved: toDoKey => dispatch(toDoActions.initRemoveToDo(toDoKey))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoList);
