import React, { useState } from 'react';
import { ThemeToggle } from '../components/ThemeToggle';
import { Package, Menu } from 'lucide-react';
import { SearchFilters } from '../components/SearchFilters';
import { PackageGrid } from '../components/PackageGrid';
import { ProfileDropdown } from '../components/ProfileDropdown';

export const MarketplacePage: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex">
      {/* Sidebar Toggle Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-30 p-2 bg-gray-800 dark:bg-gray-900 rounded-full shadow-md"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle sidebar"
      >
        <Menu className="w-6 h-6 text-white" />
      </button>

      {/* Sidebar for Mobile */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-64 h-full bg-gray-800 dark:bg-gray-900 p-4 transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 z-20`}
      >
        <div className="space-y-6">
          <ThemeToggle />
          <ProfileDropdown />
        </div>
      </div>

      <div className="flex-1">
        {/* Header for Larger Screens */}
        <header className="sticky top-0 bg-white dark:bg-gray-800 shadow-md z-10">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Package className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                Salescode Marketplace
              </h1>
            </div>
            <div className="hidden lg:flex items-center space-x-4">
              <ThemeToggle />
              <ProfileDropdown />
            </div>
          </div>
        </header>

        <div className="bg-gray-50 dark:bg-gray-800 py-6 shadow-inner">
          <div className="container mx-auto px-6">
            <SearchFilters />
          </div>
        </div>

        <main className="container mx-auto px-6 py-8">
          <PackageGrid />
        </main>
      </div>
    </div>
  );
};
