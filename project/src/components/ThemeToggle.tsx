import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { toggleTheme } from '../store/slices/themeSlice';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme);

  return (
    <div
      onClick={() => dispatch(toggleTheme())}
      className="relative w-16 h-8 flex items-center bg-gray-200 dark:bg-gray-700 rounded-full cursor-pointer transition-colors shadow-md"
      aria-label="Toggle theme"
    >
      {/* Sliding Knob */}
      <div
        className={`absolute w-7 h-7 rounded-full bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ${
          theme === 'light' ? 'translate-x-1' : 'translate-x-8'
        }`}
      ></div>

      {/* Sun Icon */}
      <Sun
        className={`absolute left-2 w-5 h-5 text-yellow-400 ${
          theme === 'light' ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        } transition-all duration-300`}
      />

      {/* Moon Icon */}
      <Moon
        className={`absolute right-2 w-5 h-5 text-blue-500 ${
          theme === 'dark' ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        } transition-all duration-300`}
      />
    </div>
  );
};
