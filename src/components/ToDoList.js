import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import ToDo from './ToDo';
import * as toDoActions from '../store/actions/todo';

const StyledToDoList = styled.div`
    width: 500px;
    max-width: 500px;
    padding: 10px;
    background: mediumslateblue;
    text-align: center;
`;

const StyledInput = styled.input`
    width: 200px;
    height: 30px;
    padding-left: 20px;
    margin-right: 20px;
    border-radius: 50px;
    color: mediumaquamarine;
    font-weight: bold;
`;

const StyledButton = styled.button`
    width: 80px;
    height: 30px;
    background: white;
    border-radius: 50px;
    color: mediumaquamarine;
    font-weight: bold;

    :disabled {
        background: lightgrey;
        color: white;
    }
`;

const StyledList = styled.ul`
    height: 422px;
    padding: 0px;
    border: 2px solid black;
`;

const StyledH2 = styled.h2`
    margin-top: 0px;
`;

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
        if (text.trim() !== '' && !this.props.isFullList) {
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
            <StyledToDoList>
                <StyledH2>ToDo List</StyledH2>
                <h3>Task to complete: {this.props.taskToComplete}</h3>
                <StyledInput onChange={this.onInputChangeHandler} />
                <StyledButton
                    onClick={this.addToDoHandler}
                    disabled={
                        this.props.buttonDisabled || this.props.isFullList
                    }
                >
                    ADD
                </StyledButton>
                <StyledList>{todos}</StyledList>
            </StyledToDoList>
        );
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos,
        isFullList: state.todos.length >= 10,
        buttonDisabled: state.buttonDisabled,
        taskToComplete: state.todos.filter(({ done }) => !done).length
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
