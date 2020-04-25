import { combineReducers } from 'redux';
import SearchReducer from './SearchReducer';
import CheckoutReducer from './CheckoutReducer';

const rootReducer = combineReducers({
  search: SearchReducer,
  checkout: CheckoutReducer,
})

export default rootReducer;