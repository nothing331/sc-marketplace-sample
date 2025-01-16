import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router';
import { Search, Star, Filter } from 'lucide-react';
import { RootState } from '../store/store';
import { setPackages, setLoading, updateFilters } from '../store/slices/packagesSlice';
import { useInView } from 'react-intersection-observer';
import { Package } from '../types/package';
import { useLocation } from 'react-router';

// Mock data generator
const generateMockPackages = (page: number): Package[] => {
  return Array.from({ length: 12 }, (_, i) => ({
    id: `pkg-${page}-${i}`,
    name: `Package ${page * 12 + i + 1}`,
    description: 'A fantastic package that helps developers build amazing applications faster and more efficiently.',
    author: `Author ${i + 1}`,
    rating: Math.floor(Math.random() * 5) + 1,
    downloads: Math.floor(Math.random() * 10000),
    tags: ['ui', 'utilities', 'components'],
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    updatedAt: new Date(Date.now() - Math.random() * 1000000000).toISOString(),
    version: '1.0.0',
    screenshots: [
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085'
    ],
    demoUrl: 'https://example.com'
  }));
};

const MarketplacePage: React.FC = () => {
  const dispatch = useDispatch();
  const { items, loading, filters } = useSelector((state: RootState) => state.packages);
  const [page, setPage] = useState(1);
  const { ref, inView } = useInView();

  const locate = useLocation()
  
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const input = queryParams.get("input");
    
    if (input !== null) {
      dispatch(updateFilters({ search: input }));
    }
  }, [locate.search, dispatch]);

  useEffect(() => {
    
    const loadMore = async () => {
      if (loading) return;
      dispatch(setLoading(true));
      // Simulate API call
      setTimeout(() => {
        const newPackages = generateMockPackages(page);
        dispatch(setPackages([...items, ...newPackages]));
        dispatch(setLoading(false));
      }, 1000);
    };

    if (inView) {
      loadMore();
      setPage(prev => prev + 1);
    }
  }, [inView]);

  // const handleSearch = (value: string) => {
  //   dispatch(updateFilters({ search: value }));
  //   setPage(1);
  //   // setHasMore(true);
  //   dispatch(setPackages([]));
  //   // loadPackages(1);
  // };

  // const debouncedSearch = debounce(handleSearch, 500);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search packages..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              value={filters.search}
              onChange={(e) => {dispatch(updateFilters({ search: e.target.value }))}}
              // onChange={(e) => debouncedSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-4">
          <select
            className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            value={filters.sortBy}
            onChange={(e) => dispatch(updateFilters({ sortBy: e.target.value as 'date' | 'rating' | 'downloads' }))}
          >
            <option value="date">Latest</option>
            <option value="rating">Top Rated</option>
            <option value="downloads">Most Downloaded</option>
          </select>
          <button
            className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 flex items-center gap-2"
            onClick={() => {/* Add filter modal */}}
          >
            <Filter className="h-5 w-5" />
            Filters
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((pkg) => (
          <Link
            key={pkg.id}
            to={`/package/${pkg.id}`}
            className="block bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{pkg.name}</h3>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-1 text-gray-600 dark:text-gray-400">{pkg.rating}</span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{pkg.description}</p>
              <div className="flex flex-wrap gap-2">
                {pkg.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {loading && (
        <div className="flex justify-center my-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
        </div>
      )}

      <div ref={ref} className="h-4" />
    </div>
  );

  
}

export default MarketplacePage;