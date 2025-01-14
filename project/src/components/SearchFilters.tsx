import React from 'react';
import { Search, Filter } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setSearchTerm, setFilter } from '../store/slices/packagesSlice';

export const SearchFilters: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="flex-1 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search packages..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
        />
      </div>
      <div className="flex gap-2">
        <select
          className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          onChange={(e) => dispatch(setFilter({ type: 'category', value: e.target.value }))}
        >
          <option value="">All Categories</option>
          <option value="ui">UI Components</option>
          <option value="state">State Management</option>
          <option value="animation">Animation</option>
          <option value="networking">Networking</option>
        </select>
        <select
          className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          onChange={(e) => dispatch(setFilter({ type: 'sort', value: e.target.value }))}
        >
          <option value="popular">Most Popular</option>
          <option value="recent">Most Recent</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>
    </div>
  );
};