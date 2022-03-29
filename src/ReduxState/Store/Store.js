import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import { RootReducer } from '../RootReducers/RootReducer';
const middleware = [logger];
export const store = createStore(RootReducer, applyMiddleware(...middleware));
