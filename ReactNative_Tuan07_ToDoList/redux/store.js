// store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import todoReducer from './todoReducer';

const rootReducer = combineReducers({
    todos: todoReducer,
});
const middleware = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
