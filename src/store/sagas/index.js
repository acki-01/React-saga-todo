import { takeEvery } from 'redux-saga/effects';
import { addToDoSaga, removeToDoSaga, markAsDoneSaga } from './todo';
import * as actionTypes from '../actions/constants';

export function* watchToDo() {
    yield takeEvery(actionTypes.INIT_ADD_TODO, addToDoSaga);
    yield takeEvery(actionTypes.INIT_REMOVE_TODO, removeToDoSaga);
    yield takeEvery(actionTypes.INIT_MARK_AS_DONE_TODO, markAsDoneSaga);
}
