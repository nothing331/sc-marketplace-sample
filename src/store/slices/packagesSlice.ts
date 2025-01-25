import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Package } from '../../types/package';
import network_service from '../../utils/network_service';
import { PACKAGE_URL } from '../../constants/api_constants';

interface PackagesState {
  items: Package[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  page: number;
  hasMore: boolean;
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
  page: 1,
  hasMore: true,
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
      const response = await network_service.get<any>({url:PACKAGE_URL})
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
      state.page = 1;
      state.hasMore = true;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.items = [];
      state.page = 1;
      state.hasMore = true;
    },
    setFilter: (state, action) => {
      const { type, value } = action.payload;
      state.filters[type as keyof typeof state.filters] = value;
      state.items = [];
      state.page = 1;
      state.hasMore = true;
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
        state.items = [...state.items, ...action.payload];
        state.page += 1;
        state.hasMore = action.payload.length > 0;
      })
      .addCase(fetchPackages.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch packages';
      });
  },
});

export const { resetPackages, setSearchTerm, setFilter, toggleStar } = packagesSlice.actions;
export default packagesSlice.reducer;