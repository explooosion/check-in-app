import { configRef } from '../boot/firebase';

/**
 * Get config
 */
export const fetchConfigService = () =>
  configRef
    .once('value')
    .then((snapshot) => ({ status: true, data: snapshot.val() }))
    .catch((error) => ({ status: false, error }));
