import _ from 'lodash';

export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';

export const CREATE_USER = 'CREATE_USER';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_ERROR = 'FETCH_USER_ERROR';

export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_ERROR = 'UPDATE_USER_ERROR';

export const CHECK_IN_USER = 'CHECK_IN_USER';

export const DELETE_ALL_USERS = 'DELETE_ALL_USERS';

const initialState = {
  lists: [],
  isFetching: false,
  isCreating: false,
  isUpdating: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    // FETCH
    case FETCH_USERS:
      return { ...state, isFetching: true };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        lists: _.sortBy(action.payload, 'createAt'),
        isFetching: false,
      };
    case FETCH_USERS_ERROR:
      return { ...state, error: action.payload, isFetching: false };

    // CREATE
    case CREATE_USER:
      return { ...state, isCreating: true };
    case CREATE_USER_SUCCESS:
      return { ...state, isCreating: false };
    case CREATE_USER_ERROR:
      return { ...state, isCreating: false };

    // UPDATE
    case UPDATE_USER:
      return { ...state, isUpdating: true };
    case UPDATE_USER_SUCCESS:
      return { ...state, isUpdating: false };
    case UPDATE_USER_ERROR:
      return { ...state, isUpdating: false };

    default:
      return state;
  }
};
