import { shoppingCartReducer } from '../Reducers/ShoppingCartReducer';
import { combineReducers } from 'redux';

export const RootReducer = combineReducers({
    shoppingCartReducer
})