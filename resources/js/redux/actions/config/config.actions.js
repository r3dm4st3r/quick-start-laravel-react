import { SET_THEME } from '@/redux/reducers/config/app/app.slice';

const TRIGGER_THEME_MODE = () => async dispatch => {
  await dispatch(SET_THEME());
};

export { TRIGGER_THEME_MODE };
