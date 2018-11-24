import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import './App.css';
import ToDoList from './components/ToDoList';
import reducer from './store/reducer';

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

const store = createStore(reducer, applyMiddleware(logger));

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
