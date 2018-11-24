import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import './App.css';
import ToDoList from './components/ToDoList';
import reducer from './store/reducers/todo';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = store => {
    return next => {
        return action => {
            console.log('[Middleware] dispatching: ', action);
            const result = next(action);
            console.log('[Middleware] next state: ', store.getState());
            return result;
        };
    };
};

const store = createStore(reducer, composeEnhancers(applyMiddleware(logger)));

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <ToDoList />
                </div>
            </Provider>
        );
    }
}

export default App;
