import { Icon } from '@iconify/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useUpdateEffect } from 'react-use';
import { TRIGGER_THEME_MODE } from '@/redux/actions/config/config.actions';
import { THEME_MODE } from '@/redux/reducers/config/app/app.slice';

const ThemeMode = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(THEME_MODE);

  const selector = document.querySelector('html');
  const media = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const toggleMode = () => {
    return dispatch(TRIGGER_THEME_MODE());
  };

  useEffect(() => {
    if (media && isDarkMode) {
      selector.classList.add('dark');
      selector.classList.remove('light');
    } else {
      selector.classList.add('light');
      selector.classList.remove('dark');
    }
  }, [isDarkMode]);

  useUpdateEffect(() => {
    localStorage.setItem('darkMode', `${isDarkMode}`);
  }, [isDarkMode]);

  return (
    <button
      onClick={() => toggleMode()}
      className="rounded-full inline-flex items-center justify-center hover:text-black dark:text-white dark:hover:text-warning transition-colors"
    >
      {isDarkMode ? <Icon width={40} icon="mingcute:sun-line" /> : <Icon width={40} icon="mingcute:sun-fill" />}
    </button>
  );
};
export default ThemeMode;
