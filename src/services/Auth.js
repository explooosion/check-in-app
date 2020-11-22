import { authRef } from '../boot/firebase';

/**
 * Get config
 */
export const loginService = (payload = { username: '', password: '' }) => {
  return authRef
    .once('value')
    .then((d) => d.val())
    .then(
      ({ username, password }) =>
        payload.username === username && payload.password === password
    )
    .then((auth) => ({ status: auth, data: { ...payload, auth } }))
    .catch((error) => ({ status: false, error }));
};
