import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Package } from '../../types';

interface PackagesState {
  items: Package[];
  loading: boolean;
  error: string | null;
  filters: {
    search: string;
    tags: string[];
    rating: number | null;
    sortBy: 'date' | 'rating' | 'downloads';
  };
}

const initialState: PackagesState = {
  items: [],
  loading: false,
  error: null,
  filters: {
    search: '',
    tags: [],
    rating: null,
    sortBy: 'date',
  },
};

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
  },
});

export const { setPackages, setLoading, setError, updateFilters } = packagesSlice.actions;
export default packagesSlice.reducer;