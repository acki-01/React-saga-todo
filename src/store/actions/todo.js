import * as actionTypes from './constants';

export const initAddToDo = newToDo => {
    return {
        type: actionTypes.INIT_ADD_TODO,
        newToDo
    };
};

export const initRemoveToDo = toDoKey => {
    return {
        type: actionTypes.INIT_REMOVE_TODO,
        toDoKey
    };
};

export const initMarkAsDone = toDoKey => {
    return {
        type: actionTypes.INIT_MARK_AS_DONE_TODO,
        toDoKey
    };
};

export const addToDo = newToDo => {
    return {
        type: actionTypes.ADD_TODO,
        newToDo
    };
};

export const removeToDo = toDoKey => {
    return {
        type: actionTypes.REMOVE_TODO,
        toDoKey
    };
};

export const markAsDone = toDoKey => {
    return {
        type: actionTypes.MARK_AS_DONE_TODO,
        toDoKey
    };
};

export const startAdding = () => {
    return {
        type: actionTypes.START_ADDING
    };
};

export const finishAdding = () => {
    return {
        type: actionTypes.FINISH_ADDING
    };
};
