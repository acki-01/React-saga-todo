import { delay } from 'redux-saga';
import { put } from 'redux-saga/effects';
import * as actions from '../actions/todo';

export function* addToDoSaga(action) {
    yield put(actions.startAdding());
    const { newToDo } = action;
    yield delay(500);
    yield put(actions.addToDo(newToDo));
    yield put(actions.finishAdding());
}

export function* removeToDoSaga(action) {
    const { toDoKey } = action;
    yield delay(500);
    yield put(actions.removeToDo(toDoKey));
}

export function* markAsDoneSaga(action) {
    const { toDoKey } = action;
    yield delay(500);
    yield put(actions.markAsDone(toDoKey));
}
