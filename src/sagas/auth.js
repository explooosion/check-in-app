import { call, put, takeLatest } from 'redux-saga/effects';

import {
  LOGIN_AUTH,
  LOGIN_AUTH_SUCCESS,
  LOGIN_AUTH_ERROR,
} from '../reducers/auth';

import { loginService } from '../services/Auth';

function* loginAuth({ payload }) {
  const response = yield call(loginService, payload);
  if (response.status) {
    yield put({ type: LOGIN_AUTH_SUCCESS, payload: response.data });
  } else {
    yield put({ type: LOGIN_AUTH_ERROR, error: response.data });
  }
}

export default function* () {
  yield takeLatest(LOGIN_AUTH, loginAuth);
}
