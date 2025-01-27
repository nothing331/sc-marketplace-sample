import { createSlice } from '@reduxjs/toolkit';

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  document.documentElement.setAttribute('data-color-mode', savedTheme || 'dark');
  return savedTheme || 'dark';
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: getInitialTheme(),
  reducers: {
    toggleTheme: (state) => {
      const newTheme = state === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-color-mode', newTheme || 'dark');
      localStorage.setItem('theme', newTheme);
      return newTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;