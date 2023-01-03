import { combineReducers } from '@reduxjs/toolkit';
import { appConfigSlice } from './app/app.slice';

// eslint-disable-next-line import/prefer-default-export  -- ignore this rule here
export const configReducer = combineReducers({
  app: appConfigSlice.reducer
});
