import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '../../types/user';

interface AuthState {
  user: User | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  status: 'idle',
  error: null,
};

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }: { email: string; password: string }) => {
    // Replace with actual API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return {
      id: '1',
      email,
      displayName: 'User Name',
      avatarUrl: 'https://example.com/avatar.png',
      createdAt: new Date().toISOString(),
      publishedPackages: [],
      pendingPackages: [],
      rejectedPackages: [],
      starredPackages: [],
    } as User;
  }
);

export const signup = createAsyncThunk(
  'auth/signup',
  async ({ email, password,name }: { email: string; password: string,name:string }) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return {
      id: '2',
      email,
      displayName: name,
      avatarUrl: 'https://example.com/avatar.png',
      createdAt: new Date().toISOString(),
      publishedPackages: [],
      pendingPackages: [],
      rejectedPackages: [],
      starredPackages: [],
    } as User;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to login';
      })
      .addCase(signup.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to sign up';
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;


// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { User } from '../../types/user';

// interface AuthState {
//   user: User | null;
//   isAuthenticated: boolean;
// }

// const initialState: AuthState = {
//   user: null,
//   isAuthenticated: false,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     login: (state, action: PayloadAction<User>) => {
//       state.user = action.payload;
//       state.isAuthenticated = true;
//     },
//     logout: (state) => {
//       state.user = null;
//       state.isAuthenticated = false;
//     },
//   },
// });

// export const { login, logout } = authSlice.actions;
// export default authSlice.reducer;