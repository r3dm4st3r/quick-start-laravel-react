import { combineReducers } from '@reduxjs/toolkit';
import { configReducer } from './reducers/config/config.reducer';

export const rootReducer = combineReducers({
  config: configReducer
});
