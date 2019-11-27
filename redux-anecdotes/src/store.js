import { createStore, combineReducers, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk';
import anecdoteReducer from './reducers/anecdoteReducer';
import notificationReducer from './reducers/notificationReducer';
import filterReducer from './reducers/filterReducer';

const reducer = combineReducers({
  anecdotes:anecdoteReducer,
  notification:notificationReducer,
  filter:filterReducer
});

const store = createStore(reducer, applyMiddleware(reduxThunk));

export default store;