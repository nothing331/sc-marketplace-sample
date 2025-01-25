import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles,Bot } from 'lucide-react';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden ">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 animate-gradient-xy"></div>
      <div className="relative min-h-screen backdrop-blur-sm bg-white/10 dark:bg-black/10 flex flex-col">
        <div className="flex-grow flex flex-col items-center justify-center px-4 mt-4 mb-4 sm:mt-8 sm:mb-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6 animate-bounce">
              <Bot className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              Salescode Marketplace
            </h1>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto animate-fade-in-delayed">
              Discover, share, and integrate powerful Flutter packages to build exceptional applications.
            </p>
            <button
              onClick={() => navigate('/marketplace')}
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white animate-fade-in-delayed"
            >
              <span className="mr-2">Explore Packages</span>
              <Sparkles className="w-5 h-5 transition-transform group-hover:rotate-12" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 w-full max-w-6xl">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Quality Assured</h3>
              <p className="text-white/80">
                Every package is thoroughly reviewed to ensure high quality and reliability.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Easy Integration</h3>
              <p className="text-white/80">
                Simple installation process with comprehensive documentation.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Active Community</h3>
              <p className="text-white/80">
                Join a vibrant community of developers sharing and collaborating.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
