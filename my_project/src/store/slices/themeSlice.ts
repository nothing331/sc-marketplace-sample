
// import { createSlice } from '@reduxjs/toolkit';

// interface ThemeState {
//   isDarkMode: boolean;
// }

// const initialState: ThemeState = {
//   isDarkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,
// };

// const themeSlice = createSlice({
//   name: 'theme',
//   initialState,
//   reducers: {
//     toggleTheme: (state) => {
//       state.isDarkMode = !state.isDarkMode;
//     },
//   },
// });

// export const { toggleTheme } = themeSlice.actions;
// export default themeSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
  isDarkMode: boolean;
}

// Get theme from localStorage, if not present use system preference
const getInitialTheme = (): boolean => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme !== null) {
    return JSON.parse(savedTheme);
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

const initialState: ThemeState = {
  isDarkMode: getInitialTheme(),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
      // Save to localStorage
      localStorage.setItem('theme', JSON.stringify(state.isDarkMode));
      // Update document class for Tailwind
      if (state.isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },
    // Optional: Add action to set theme directly
    setTheme: (state, action: { payload: boolean }) => {
      state.isDarkMode = action.payload;
      localStorage.setItem('theme', JSON.stringify(action.payload));
      if (action.payload) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  },
});

// Initialize theme on app load
if (initialState.isDarkMode) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;