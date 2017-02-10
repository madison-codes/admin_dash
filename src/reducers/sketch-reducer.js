import * as types from '../actions/action-types';

export default (state = [], action) => {
  switch (action.type) {
    case types.FILTER_OLD:
      return [...state, Object.assign({}, action.oldest)];
    default:
      return state;
   }
 };
