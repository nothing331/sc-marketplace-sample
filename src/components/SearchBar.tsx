import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SearchBar: React.FC = () => {
  const [search, setSearch] = useState('');
  const [searchBar, setSearchBar] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/marketplace?search=${search}`);
  };

  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchValue = searchParams.get('search');
    setSearchBar(searchValue || '');
  }, [location,searchBar]);

  return (
    <div className="relative text-gray-800 dark:text-gray-200 w-full flex flex-col items-center text-center px-4 sm:px-8">
      <main className="flex flex-col items-center w-full max-w-4xl">

        {/* Search Bar */}
        <div className="mt-4 flex items-center w-full sm:w-96">
          <input
            type="text"
            placeholder="Search for a template..."
            className="p-4 w-full sm:w-80 rounded-l-md bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="bg-purple-500 hover:bg-purple-600 px-6 py-4 rounded-r-md text-white font-medium"
            onClick={handleSubmit}
          >
            Search
          </button>
        </div>
      </main>
    </div>
  );
};

export { SearchBar };
