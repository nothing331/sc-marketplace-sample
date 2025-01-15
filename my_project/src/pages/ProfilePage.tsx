import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Package } from '../types/package';
import { logout } from '../store/slices/authSlice';
import { useNavigate } from 'react-router';

type PackageStatus = 'published' | 'rejected' | 'pending' | 'starred';

const ProfilePage: React.FC = () => {

    const dispatch = useDispatch()
  const { user } = useSelector((state: RootState) => state.auth);
  const [activeTab, setActiveTab] = useState<PackageStatus>('published');
  const navigate = useNavigate();

  const getPackagesByStatus = (status: PackageStatus): Package[] => {
    if (status === 'starred') return user?.starredPackages || [];
    return user?.packages.filter(pkg => pkg.status === status) || [];
  };

  const handleLogout = ()=>{
    dispatch(logout())
    navigate('/marketplace')
  }

  const packages = getPackagesByStatus(activeTab);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Profile Sidebar */}
        <div className="md:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div className="text-center">
              <img
                src={user?.avatar}
                alt={user?.name}
                className="mx-auto h-24 w-24 rounded-full"
              />
              <h2 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                {user?.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">{user?.email}</p>
            </div>
            <div className="mt-6 space-y-2">
              <button className="w-full px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md">
                Edit Profile
              </button>
              <button className="w-full px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md">
                Change Password
              </button>
              <button className="w-full px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-red-300 dark:hover:bg-red-300 hover:text-black dark:hover:text-black rounded-md"
              onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Package List */}
        <div className="md:col-span-3">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
            <div className="border-b border-gray-200 dark:border-gray-700">
              <nav className="flex -mb-px">
                {(['published', 'rejected', 'pending', 'starred'] as const).map((status) => (
                  <button
                    key={status}
                    onClick={() => setActiveTab(status)}
                    className={`${
                      activeTab === status
                        ? 'border-primary-500 text-primary-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm capitalize`}
                  >
                    {status}
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-6">
              {packages.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 dark:text-gray-400">
                    No packages found in this category.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {packages.map((pkg) => (
                    <div
                      key={pkg.id}
                      className="flex items-start justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                    >
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                          {pkg.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                          {pkg.description}
                        </p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          v{pkg.version}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;