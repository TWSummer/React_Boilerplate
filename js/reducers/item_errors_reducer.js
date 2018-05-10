import {RECEIVE_ITEM_ERRORS,
  RECEIVE_ITEMS,
  RECEIVE_ITEM } from '../actions/item_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ITEM_ERRORS:
      return action.errors;
    case RECEIVE_ITEMS:
      return [];
    case RECEIVE_ITEM:
      return [];
    default:
      return state;
  }
};
