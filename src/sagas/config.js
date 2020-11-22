import { call, put, takeLatest } from 'redux-saga/effects';

import {
  FETCH_CONFIG,
  FETCH_CONFIG_SUCCESS,
  FETCH_CONFIG_ERROR,
} from '../reducers/config';

import { fetchConfigService } from '../services/Config';

function* fetchConfig() {
  const response = yield call(fetchConfigService);
  if (response.status) {
    yield put({ type: FETCH_CONFIG_SUCCESS, payload: response.data });
  } else {
    yield put({ type: FETCH_CONFIG_ERROR, error: response.data });
  }
}

export default function* () {
  yield takeLatest(FETCH_CONFIG, fetchConfig);
}
