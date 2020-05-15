import { combineReducers } from 'redux';
import SearchReducer from './SearchReducer';
import CheckoutReducer from './CheckoutReducer';
import UserReducer from './UserReducer';

const rootReducer = combineReducers({
  search: SearchReducer,
  checkout: CheckoutReducer,
  user: UserReducer
})

export default rootReducer;