import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Package as PackageIcon, Star, Upload } from 'lucide-react';
import { PackageCard } from '../components/PackageCard';
import { useNavigate } from 'react-router-dom';

export const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.auth);
  const { starredPackages, items } = useSelector((state: RootState) => state.packages);

  const starredPackageItems = items.filter(pkg => starredPackages.includes(pkg.id));

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  if (!user) {
    return null; // Prevent rendering if user is null and navigation hasn't occurred yet
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Profile Section */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto mb-4">
                  <img
                    src={user.avatarUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.email)}`}
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  {user.displayName || user.email}
                </h2>
                <p className="text-gray-500 dark:text-gray-400">{user.email}</p>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Joined</span>
                    <span className="text-gray-900 dark:text-white">
                      {new Date(user.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Published Packages</span>
                    <span className="text-gray-900 dark:text-white">0</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Starred Packages</span>
                    <span className="text-gray-900 dark:text-white">{starredPackages.length}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Packages Section */}
          <div className="lg:col-span-3">
            <div className="space-y-8">
              {/* Published Packages */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                    <Upload className="w-5 h-5 mr-2" />
                    Published Packages
                  </h3>
                  <button className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                    Publish New
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Add published packages here */}
                </div>
              </div>

              {/* Starred Packages */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center mb-4">
                  <Star className="w-5 h-5 mr-2" />
                  Starred Packages
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {starredPackageItems.map(pkg => (
                    <PackageCard key={pkg.id} package={pkg} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
