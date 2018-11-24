import * as actionTypes from './actions';

const initialState = {
    todos: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.newToDo]
            };
        case actionTypes.MARK_AS_DONE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.key === action.toDoKey) {
                        todo.done = !todo.done;
                    }
                    return todo;
                })
            };
        case actionTypes.REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.key !== action.toDoKey)
            };
        default:
            return state;
    }
};
export default reducer;
