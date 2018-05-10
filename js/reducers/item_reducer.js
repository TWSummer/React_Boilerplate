import merge from 'lodash/merge';
import { RECEIVE_ITEM, RECEIVE_ITEMS } from '../actions/item_actions';

const itemReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ITEMS:
      return action.items;
    case RECEIVE_ITEM:
      let newState = merge(action.item, state);
      return newState;
    default:
      return state;
  }
};

export default itemReducer;
