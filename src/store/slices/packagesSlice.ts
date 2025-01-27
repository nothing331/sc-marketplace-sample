import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Package } from '../../types/package';
import network_service from '../../utils/network_service';
import { PACKAGE_URL } from '../../constants/api_constants';

interface PackagesState {
  items: Package[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  searchTerm: string;
  filters: {
    category: string;
    sort: string;
  };
  starredPackages: string[];
}

const initialState: PackagesState = {
  items: [],
  status: 'idle',
  error: null,
  searchTerm: '',
  filters: {
    category: '',
    sort: 'popular'
  },
  starredPackages: []
};

export const fetchPackages = createAsyncThunk(
  'packages/fetchPackages',
  async () => {
    try {
      const response = await network_service.get<any>({url:PACKAGE_URL,timeOutDuration:10000});
      return  response.data.packages; 
    } catch (error) {
      console.error('Error fetching packages:', error);
      throw error; 
    }
  }
);

const packagesSlice = createSlice({
  name: 'packages',
  initialState,
  reducers: {
    resetPackages: (state) => {
      state.items = [];
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.items = [];
    },
    setFilter: (state, action) => {
      const { type, value } = action.payload;
      state.filters[type as keyof typeof state.filters] = value;
      state.items = [];
    },
    toggleStar: (state, action) => {
      const packageId = action.payload;
      const index = state.starredPackages.indexOf(packageId);
      if (index === -1) {
        state.starredPackages.push(packageId);
      } else {
        state.starredPackages.splice(index, 1);
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPackages.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPackages.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = [...action.payload];
      })
      .addCase(fetchPackages.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch packages';
      });
  },
});

export const { resetPackages, setSearchTerm, setFilter, toggleStar } = packagesSlice.actions;
export default packagesSlice.reducer;