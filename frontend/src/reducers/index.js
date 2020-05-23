import { combineReducers } from 'redux';

import CheckoutReducer from './CheckoutReducer';
import SystemReducer from './SystemReducer';
import SearchReducer from './SearchReducer';
import UserReducer from './UserReducer';
import GrowlReducer from './GrowlReducer';

const rootReducer = combineReducers({
  checkout: CheckoutReducer,
  system: SystemReducer,
  search: SearchReducer,
  growl: GrowlReducer,
  user: UserReducer
})

export default rootReducer;