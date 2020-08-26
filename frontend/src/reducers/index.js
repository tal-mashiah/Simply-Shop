import { combineReducers } from 'redux';

import CheckoutReducer from './CheckoutReducer';
import SystemReducer from './SystemReducer';
import SearchReducer from './SearchReducer';
import UserReducer from './UserReducer';
import GrowlReducer from './GrowlReducer';
import CategoryReducer from './CategoryReducer';
import CompareReducer from './CompareReducer';

const rootReducer = combineReducers({
  compare: CompareReducer,
  checkout: CheckoutReducer,
  category: CategoryReducer,
  system: SystemReducer,
  search: SearchReducer,
  growl: GrowlReducer,
  user: UserReducer
})

export default rootReducer;