import React from 'react';
import { useNavigate } from 'react-router-dom';

const SearchFilters: React.FC = () => {
  const navigate = useNavigate();
  const handleTagClick = (tag: string) => {
    navigate(`/all/${tag}`)
  };

  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 h-screen flex flex-col items-center justify-center text-center">
      <main className="mt-20 flex flex-col items-center">
        
        <div className="mt-6 flex items-center">
          <input
            type="text"
            placeholder="Search for a template..."
            className="p-4 w-80 rounded-l-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button className="bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-r-md text-white font-medium">
            Search
          </button>
        </div>

        {/* Tags Section */}
        <div className="mt-6 text-gray-300">
          Or search popular templates below
        </div>
        <div className="flex space-x-4 mt-4">
          {['chat', 'dashboard', 'ai', 'crm', 'calendar'].map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)} // Handle tag click
              className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm"
            >
              {tag}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};

export { SearchFilters };
