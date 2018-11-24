import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import './App.css';
import ToDoList from './components/ToDoList';
import reducer from './store/reducers/todo';
import { watchToDo } from './store/sagas';

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

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(logger, sagaMiddleware))
);

sagaMiddleware.run(watchToDo);

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
