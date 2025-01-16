import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../store/slices/themeSlice';
import { RootState } from '../store/store';

export const ThemeDemo = () => {
//   const dispatch = useDispatch();
//   const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode)

  return (
    <button
    //   onClick={() => dispatch(toggleTheme())}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
    >
      {/* {isDarkMode ? '☀️' : '🌙'} */}
    </button>
  );
};