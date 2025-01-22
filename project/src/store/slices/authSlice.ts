import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '../../types/user';
import { Fullscreen, Network } from 'lucide-react';
import axios from 'axios';
import { LOGIN, SIGNUP } from '../../constants/api_constants';
import network_service, { NetworkException } from '../../utils/network_service';
import { url } from 'inspector';

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

let jwtToken;

export const login = createAsyncThunk(
  'auth/login',
  async ({ username, password }: { username: string; password: string }) => {
    // Replace with actual API call
    const payload ={
      username : username,
      password :password
    }

    await axios.post(LOGIN,payload)
    .then(response => {
      jwtToken = response.data;
      localStorage.setItem('responseData', JSON.stringify(jwtToken));
      console.log('Response:', response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return {
      id: '1',
      email:'',
      displayName: username,
      fullName:'',
      avatarUrl: 'https://avatar.iran.liara.run/public',
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
  async ({ email, password,name ,username }: { email: string; password: string,name:string, username:string }) => {
    const payload ={
      username : username,
      email:email,
      fullName : name,
      password :password
    }

    var response;
    try {
      response = await network_service.post<any>({url:SIGNUP,body:payload});
    }catch (error) {
      const exc= error as NetworkException;
      console.log(exc.message);
      console.log(exc.status);
    }


    localStorage.setItem('token', JSON.stringify(response!.data['token']));
    
    return {
      id: '2',
      email,
      displayName: username,
      fullName: name,
      avatarUrl: 'https://avatar.iran.liara.run/public',
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