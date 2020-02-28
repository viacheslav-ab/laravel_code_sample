/**
 * Root Sagas
 */
import { all } from 'redux-saga/effects';

// sagas
import authSagas from './Auth';
import planSagas from './Plan';

export default function* rootSaga(getState) {
    yield all([
        authSagas(),
        planSagas(),
    ]);
}