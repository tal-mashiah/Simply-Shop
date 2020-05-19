import { combineReducers } from 'redux';

import CheckoutReducer from './CheckoutReducer';
import SystemReducer from './SystemReducer';
import SearchReducer from './SearchReducer';
import UserReducer from './UserReducer';

const rootReducer = combineReducers({
  checkout: CheckoutReducer,
  system: SystemReducer,
  search: SearchReducer,
  user: UserReducer
})

export default rootReducer;