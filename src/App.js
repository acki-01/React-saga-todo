import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import styled, { createGlobalStyle } from 'styled-components';

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

const StyledApp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const GlobalStyles = createGlobalStyle`
    body {
        height: 100vh;
        padding: 0;
        margin: 0;
        background: black;
        color: white;
    }
    * {
        box-sizing: border-box;
    }
`;

class App extends Component {
    render() {
        return (
            <>
                <GlobalStyles />
                <StyledApp>
                    <Provider store={store}>
                        <ToDoList />
                    </Provider>
                </StyledApp>
            </>
        );
    }
}

export default App;
