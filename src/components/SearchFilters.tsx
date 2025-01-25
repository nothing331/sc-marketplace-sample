import React, { useState , useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SearchFilters: React.FC = () => {
  const [search, setSearch] = useState('');
  const [searchBar, setSearchBar] = useState('');
  const navigate = useNavigate();
  const handleTagClick = (tag: string) => {
    // navigate(`/all/${tag}`)
    navigate(`/marketplace?search=${tag}`)
  };

  const handleSubmit =()=>{
    navigate(`/marketplace?search=${search}`)
  }

  const location = useLocation();

  //   // Extract the 'search' query parameter
  //   const searchParams = new URLSearchParams(location.search);
  //   const searchValue = searchParams.get('search');
  //   setSearchBar(searchValue || '');

  useEffect(() => {

    // Extract the 'search' query parameter
    const searchParams = new URLSearchParams(location.search);
    const searchValue = searchParams.get('search');
    setSearchBar(searchValue || '');
  }, [])
  

  return (
    <div className="relative text-gray-800 dark:text-gray-200 h-fill flex flex-col items-center justify-center text-center">
      <main className="flex flex-col items-center">
        
        <div className="mt-6 flex items-center">
          <input
            type="text"
            placeholder="Search for a template..."
            className="p-4 w-80 rounded-l-md bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            onChange={(e)=>setSearch(e.target.value)}
          />
          <button className="bg-purple-500 hover:bg-purple-600 px-6 py-4 rounded-r-md text-white font-medium"
            onClick={handleSubmit}>
            Search
          </button>
        </div>

        {/* Tags Section */}
        <div className="mt-6 text-gray-600 dark:text-gray-300">
          Or search popular templates below
        </div>
        <div className="flex space-x-4 mt-4">
          {['chat', 'dashboard', 'ai', 'crm', 'calendar'].map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)} // Handle tag click
              className="bg-gray-200 hover:bg-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white px-4 py-2 rounded-md text-sm"
            >
              {tag}
            </button>
          ))}
          {searchBar && (
            <div className='text-white dark:text-black'>
              {searchBar}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export { SearchFilters };
