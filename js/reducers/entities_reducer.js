import { combineReducers } from 'redux';
import itemReducer from './item_reducer';


const entitiesReducer = combineReducers({
  item: itemReducer,
});

export default entitiesReducer;
