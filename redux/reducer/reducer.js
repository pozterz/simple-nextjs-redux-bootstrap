import { combineReducers }  from 'redux';
import products from './products'

export const reducers = {
  products,
};

export default combineReducers({
  ...reducers,
});
