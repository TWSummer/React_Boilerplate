import * as APIUtil from '../util/item_util';

export const RECEIVE_ITEMS = "RECEIVE_ITEMS";
export const RECEIVE_ITEM = "RECEIVE_ITEM";
export const RECEIVE_ITEM_ERRORS = "RECEIVE_ITEM_ERRORS";

const receiveItems = items => ({
  type: RECEIVE_ITEMS,
  items
});

const receiveItem = item => ({
  type: RECEIVE_ITEM,
  item
});

const receiveErrors = errors => ({
  type: RECEIVE_ITEM_ERRORS,
  errors
});

export const fetchItems = () => dispatch => (
  APIUtil.fetchItems()
    .then(
      items => dispatch(receiveItems(items)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    )
);


export const createItem = formItem => dispatch => (
  APIUtil.createItem(formItem)
    .then(
      item => dispatch(receiveItem(item)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    )
);
