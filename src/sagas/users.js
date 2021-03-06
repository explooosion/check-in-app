import { call, delay, put, takeLatest } from 'redux-saga/effects';

import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
  CREATE_USER,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  CHECK_IN_USER,
  DELETE_ALL_USERS,
} from '../reducers/users';

import {
  fetchUsersService,
  createUserService,
  updateUserService,
  checkInUserService,
  deleteAllUsersService,
} from '../services/Users';

function* fetchUsers() {
  while (true) {
    const response = yield call(fetchUsersService);
    if (response.status) {
      yield put({ type: FETCH_USERS_SUCCESS, payload: response.data });
    } else {
      yield put({ type: FETCH_USERS_ERROR, payload: response.error });
    }
    yield delay(1000 * 3);
  }
}

function* createUser({ payload }) {
  const response = yield call(createUserService, payload);
  if (response.status) {
    yield put({ type: CREATE_USER_SUCCESS, payload: response.data });
  } else {
    yield put({ type: CREATE_USER_ERROR, payload: response.error });
  }
}

function* updateUser({ payload }) {
  const response = yield call(updateUserService, payload);
  if (response.status) {
    yield put({ type: UPDATE_USER_SUCCESS, payload: response.data });
  } else {
    yield put({ type: UPDATE_USER_ERROR, payload: response.error });
  }
}

function* checkInUser({ payload }) {
  const response = yield call(checkInUserService, payload);
  if (response.status) {
    yield put({ type: CREATE_USER_SUCCESS, payload: response.data });
  } else {
    yield put({ type: CREATE_USER_ERROR, payload: response.error });
  }
}

function* deleteAllUsers() {
  yield call(deleteAllUsersService);
}

export default function* () {
  yield takeLatest(FETCH_USERS, fetchUsers);
  yield takeLatest(CREATE_USER, createUser);
  yield takeLatest(UPDATE_USER, updateUser);
  yield takeLatest(CHECK_IN_USER, checkInUser);
  yield takeLatest(DELETE_ALL_USERS, deleteAllUsers);
}
