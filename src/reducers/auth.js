import Storage from '../boot/storage';

export const LOGIN_AUTH = 'LOGIN_AUTH';
export const LOGIN_AUTH_SUCCESS = 'LOGIN_AUTH_SUCCESS';
export const LOGIN_AUTH_ERROR = 'LOGIN_AUTH_ERROR';

export const STORAGE_AUTH = 'STORAGE_AUTH';

const initialState = {
  auth: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_AUTH:
      return { ...state, loading: true };
    case LOGIN_AUTH_SUCCESS:
      Storage.setItem(STORAGE_AUTH, action.payload);
      return { ...state, ...action.payload, loading: false };
    case LOGIN_AUTH_ERROR:
      Storage.removeItem(STORAGE_AUTH);
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
