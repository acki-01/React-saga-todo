import { delay } from 'redux-saga';
import { put } from 'redux-saga/effects';
import * as actionTypes from '../actions/constants';

export function* addToDoSaga(action) {
    const { newToDo } = action;
    yield delay(500);
    yield put({ type: actionTypes.ADD_TODO, newToDo });
}

export function* removeToDoSaga(action) {
    const { toDoKey } = action;
    yield delay(500);
    yield put({ type: actionTypes.REMOVE_TODO, toDoKey });
}

export function* markAsDoneSaga(action) {
    const { toDoKey } = action;
    yield delay(500);
    yield put({ type: actionTypes.MARK_AS_DONE_TODO, toDoKey });
}
