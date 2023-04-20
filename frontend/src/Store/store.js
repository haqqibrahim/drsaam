// store.js
import { createStore } from 'redux';

const initialState = {
  isLoading: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.isLoading };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
