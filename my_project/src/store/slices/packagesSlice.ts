import { createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import { Package } from '../../types/package';
import { fetchPackages as fetchPackagesApi } from '../../api/packages';

interface PackagesState {
  items: Package[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  loading: boolean;
  error: string | null;
  page: number;
  hasMore: boolean;
  searchTerm: string;
  filters: {
    search: string;
    tags: string[];
    rating: number | null;
    sortBy: 'date' | 'rating' | 'downloads';
  };
  starredPackages: string[];
}

const initialState: PackagesState = {
  items: [],
  loading: false,
  status: 'idle',
  error: null,
  page: 1,
  hasMore: true,
  searchTerm: '',
  filters: {
    search: '',
    tags: [],
    rating: null,
    sortBy: 'date',
  },
  starredPackages: []
};

export const fetchPackages = createAsyncThunk(
  'packages/fetchPackages',
  async (page: number) => {
    const response = await fetchPackagesApi(page);
    return response;
  }
);

const packagesSlice = createSlice({
  name: 'packages',
  initialState,
  reducers: {
    setPackages: (state, action: PayloadAction<Package[]>) => {
      state.items = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    updateFilters: (state, action: PayloadAction<Partial<PackagesState['filters']>>) => {
      state.filters = { ...state.filters, ...action.payload };
    },
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
    // setFilter: (state, action) => {
    //   const { type, value } = action.payload;
    //   state.filters[type as keyof typeof state.filters] = value;
    //   state.items = [];
    //   state.page = 1;
    //   state.hasMore = true;
    // },
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

export const { setPackages, setLoading, setError, updateFilters, resetPackages, setSearchTerm, toggleStar } = packagesSlice.actions;
export default packagesSlice.reducer;