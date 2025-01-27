import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SearchBar: React.FC = () => {
  const [search, setSearch] = useState('');
  const [filteredItems, setFilteredItems] = useState<any[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const items = useSelector((state: any) => state.packages.items);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchValue = searchParams.get('search') || '';
    setSearch(searchValue);
  }, [location]);

  useEffect(() => {
    if (search.trim()) {
      const matches = items.filter((item: any) =>
        item.packageName.toLowerCase().startsWith(search.toLowerCase())
      );
      setFilteredItems(matches);
      setShowDropdown(true);
    } else {
      setFilteredItems([]);
      setShowDropdown(false);
    }
  }, [search, items]);

  return (
    <div className="relative text-gray-800 dark:text-gray-200 w-full flex flex-col items-center text-center px-4 sm:px-8">
      <main className="flex flex-col items-center w-full max-w-4xl">

        {/* Search Bar */}
        <div className="mt-4 flex items-center w-full sm:w-96">
          <input
            type="text"
            placeholder="Search for a package..."
            value={search}
            className="p-4 w-full sm:w-80 rounded-l-md bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 px-6 py-4 rounded-r-md text-white font-medium"
            onClick={() => navigate(`/marketplace?search=${search}`)}
          >
            Search
          </button>
        </div>

        {/* Dropdown Suggestions */}
        {showDropdown && (
          <div className="absolute top-16 w-full sm:w-96 bg-white dark:bg-gray-800 shadow-lg rounded-lg z-10 overflow-hidden mt-2 transition-all duration-300 ease-in-out">
            {filteredItems.length > 0 ? (
              filteredItems.map((item: any) => (
                <div
                  key={item._id}
                  className="p-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-white rounded-lg transition-all duration-200"
                  onClick={() => navigate(`/package/${item._id}`)}
                >
                  {item.packageName}
                </div>
              ))
            ) : (
              <div className="p-4 text-gray-500 dark:text-gray-300">
                No such package
              </div>
            )}
          </div>
        )}

      </main>
    </div>
  );
};

export { SearchBar };
