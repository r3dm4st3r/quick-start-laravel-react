import { createSlice } from '@reduxjs/toolkit';

const isLocalThemeSet = JSON.parse(localStorage.getItem('darkMode'));
const initialState = {
  dark: isLocalThemeSet ?? false
};

export const appConfigSlice = createSlice({
  name: 'appConfig',
  initialState,
  reducers: {
    SET_THEME: state => ({
      ...state,
      dark: !state.dark
    })
  }
});

export const { SET_THEME } = appConfigSlice.actions;
export const THEME_MODE = state => state.config.app.dark;
