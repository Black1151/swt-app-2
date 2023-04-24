import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import studentReducer from './studentSlice';

const rootReducer = combineReducers({
  form: studentReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
