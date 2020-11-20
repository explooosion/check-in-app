import _ from 'lodash';
import { v1 as uuid } from 'uuid';

import { usersRef, userRef, TIMESTAMP } from '../boot/firebase';

/**
 * Get user list
 */
export const fetchUsersService = () =>
  usersRef
    .once('value')
    .then((snapshot) => ({ status: true, data: _.valuesIn(snapshot.val()) }))
    .catch((error) => ({ status: false, error }));

/**
 * Create user
 */
export const createUserService = (
  payload = { name: 'Unknow', status: true }
) => {
  const id = uuid();
  return userRef(id)
    .set(_.assign(payload, { id, createAt: TIMESTAMP }))
    .then(() => ({ status: true }))
    .catch((error) => ({ status: false, error }));
};

/**
 * Update user
 */
export const updateUserService = (payload) => {
  if (_.isEmpty(payload.id)) return { status: false, error };
  return userRef(_.get(payload, 'id'))
    .update(
      _.chain(payload)
        .pick(['status', 'name'])
        .assign({ updateAt: TIMESTAMP })
        .value()
    )
    .then(() => ({ status: true }))
    .catch((error) => ({ status: false, error }));
};

/**
 * Check in user
 */
export const checkInUserService = (payload) => {
  const id = uuid();
  return userRef(id)
    .set(
      _.chain(payload)
        .pick(['name'])
        .assign({ id, status: true, createAt: TIMESTAMP })
        .value()
    )
    .then(() => ({ status: true }))
    .catch((error) => ({ status: false, error }));
};
