import { all } from 'redux-saga/effects';

const sagas = ['users', 'config', 'auth'];

const Sagas = sagas.map((saga) => require(`./${saga}`).default());

export default function* rootSaga() {
  yield all(Sagas);
}
