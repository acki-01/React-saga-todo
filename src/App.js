import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './App.css';
import ToDoList from './components/ToDoList';
import reducer from './store/reducer';

const store = createStore(reducer);

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
