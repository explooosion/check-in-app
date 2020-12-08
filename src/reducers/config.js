export const FETCH_CONFIG = 'FETCH_CONFIG';
export const FETCH_CONFIG_SUCCESS = 'FETCH_CONFIG_SUCCESS';
export const FETCH_CONFIG_ERROR = 'FETCH_CONFIG_ERROR';

const initialState = {
  config: {},
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONFIG:
      return { ...state, loading: true };
    case FETCH_CONFIG_SUCCESS:
      return { ...state, config: action.payload, loading: false };
    case FETCH_CONFIG_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
