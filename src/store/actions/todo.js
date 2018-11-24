import * as actionTypes from './constants';

export const addToDo = newToDo => {
    return {
        type: actionTypes.INIT_ADD_TODO,
        newToDo
    };
};

export const removeToDo = toDoKey => {
    return {
        type: actionTypes.INIT_REMOVE_TODO,
        toDoKey
    };
};

export const markAsDone = toDoKey => {
    return {
        type: actionTypes.INIT_MARK_AS_DONE_TODO,
        toDoKey
    };
};
