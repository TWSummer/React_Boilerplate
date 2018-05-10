import { combineReducers } from 'redux';
import itemErrorsReducer from './item_errors_reducer';


const errorsReducer = combineReducers({
  item: itemErrorsReducer,
});

export default errorsReducer;
