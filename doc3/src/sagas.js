import { call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects';

import { fetchSW as fetchSWAPI } from './sw-api';

export function* fetchSW(action) {
    try {
        yield delay(2000);
        const data = yield call(fetchSWAPI, action.page || 1);
        yield put({ type: 'SW_FETCH_SUCCEEDED', data });
    } catch (e) {
        yield put({ type: 'SW_FETCH_FAILED', message: e.message });
    }
}

function* mySaga() {
    yield takeEvery('SW_FETCH_REQUESTED', fetchSW);
}

// function* mySaga() {
//     yield takeLatest('SW_FETCH_REQUESTED', fetchSW);
// }

export default mySaga;
