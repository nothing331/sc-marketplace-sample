import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import packagesReducer from './slices/packagesSlice';
import authReducer from './slices/authSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    packages: packagesReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;