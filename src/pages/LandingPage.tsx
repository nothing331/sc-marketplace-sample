import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Bot } from 'lucide-react';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Aesthetic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-400 to-gray-300 dark:from-blue-800 dark:via-blue-900 dark:to-gray-800 animate-gradient-xy"></div>
      
      <div className="relative min-h-screen backdrop-blur-md bg-white/30 dark:bg-gray-800/30 flex flex-col">
        <div className="flex-grow flex flex-col items-center justify-center px-4 mt-4 mb-4 sm:mt-8 sm:mb-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Bot className="w-16 h-16 text-gray-900 dark:text-white animate-bounce" />
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">
              Salescode Marketplace
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
              Discover, share, and integrate powerful Flutter packages to build exceptional applications.
            </p>
            <button
              onClick={() => navigate('/marketplace')}
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-gray-900 transition-all duration-200 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <span className="mr-2">Explore Packages</span>
              <Sparkles className="w-5 h-5 transition-transform group-hover:rotate-12" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 w-full max-w-6xl">
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Quality Assured
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Every package is thoroughly reviewed to ensure high quality and reliability.
              </p>
            </div>

            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Easy Integration
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Simple installation process with comprehensive documentation.
              </p>
            </div>

            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Active Community
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Join a vibrant community of developers sharing and collaborating.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
