import React from 'react';
import { Link } from 'react-router-dom';
import { Package, ArrowRight } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 dark:from-gray-800 dark:via-gray-900 dark:to-black animate-gradient-xy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <Package className="h-16 w-16 text-white" />
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Discover Amazing Packages
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
            Explore a world of high-quality packages that will supercharge your development workflow
          </p>
          <Link
            to="/marketplace"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-primary-600 bg-white rounded-full hover:bg-gray-50 transition-colors duration-200"
          >
            Explore Packages
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
            <h3 className="text-xl font-semibold text-white mb-4">Quality Assured</h3>
            <p className="text-white/80">Every package is thoroughly reviewed to ensure high quality and reliability.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
            <h3 className="text-xl font-semibold text-white mb-4">Easy Integration</h3>
            <p className="text-white/80">Simple installation process with comprehensive documentation.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
            <h3 className="text-xl font-semibold text-white mb-4">Active Community</h3>
            <p className="text-white/80">Join a vibrant community of developers sharing and collaborating.</p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default LandingPage;