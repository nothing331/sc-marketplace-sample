import React, { useState} from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router";
import { RootState } from "../../store/store";
import { Star, Download, Calendar, Clock, ExternalLink } from 'lucide-react';
import { format } from 'date-fns';

type PackageInfo = 'Readme' | 'Changelog' | 'Example' | 'Installing' | 'Version' | 'Scores';

const Example: React.FC = () => {
    const [activeTab, setActiveTab] = useState<PackageInfo>('Readme');
    const {id} = useParams<{id: string}>();
    const {isAuthenticated} = useSelector((state: RootState) => state.auth);
    const packages = useSelector((state: RootState) => state.packages.items);
    const pkg = packages.find(p => p.id === id);
    const navigate = useNavigate();

    if (!pkg) {
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Package not found</h2>
          </div>
        );
      }


    return(
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {pkg.name}
            </h1>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="ml-1">{pkg.rating}</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Download className="h-5 w-5" />
                <span className="ml-1">{pkg.downloads.toLocaleString()} downloads</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Calendar className="h-5 w-5" />
                <span className="ml-1">
                  Published {format(new Date(pkg.createdAt), 'MMM d, yyyy')}
                </span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Clock className="h-5 w-5" />
                <span className="ml-1">
                  Updated {format(new Date(pkg.updatedAt), 'MMM d, yyyy')}
                </span>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-8">
              {pkg.description}
            </p>

            {/* toggle detail tabs */}

            {/* <div>
                <nav className="flex -mb-px">
                {(['Readme' , 'Changelog' , 'Example' , 'Installing' , 'Version' , 'Scores'] as const).map((status) => (
                  <button
                    key={status}
                    onClick={() => handlePkgDetails(status)}
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
            </div> */}

            <div>
            <nav className="flex -mb-px">
                {(['Readme', 'Changelog', 'Example', 'Installing', 'Version', 'Scores'] as const).map((status) => (
                <NavLink
                    key={status}
                    to={status === 'Readme' ? `/package/${pkg.id}` : `/package/${pkg.id}/${status.toLowerCase()}`}
                    className={({ isActive }) => `
                    whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm capitalize
                    ${isActive 
                        ? 'border-primary-500 text-primary-600' 
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
                    `}
                >
                    {status}
                </NavLink>
                ))}
            </nav>
            </div>
            

            <div className="space-y-8">
              {/* Screenshots */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Example
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  
                </div>
              </div>

              {/* Demo */}
              {pkg.demoUrl && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Live Demo
                  </h2>
                  <a
                    href={pkg.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-600 hover:text-primary-500"
                  >
                    View Demo <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              )}

              {/* Reviews */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Reviews
                  </h2>
                  {isAuthenticated ? (
                    <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
                      Write a Review
                    </button>
                  ) : (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Please login to write a review
                    </p>
                  )}
                </div>
                {/* Add reviews list here */}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 sticky top-8">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Package Information
              </h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <p>Version: {pkg.version}</p>
                <p>Author: {pkg.author}</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {pkg.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* You May Also Like */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                You May Also Like
              </h3>
              <div className="space-y-4">
                {packages.slice(0, 3).map((relatedPkg) => (
                  <div
                    key={relatedPkg.id}
                    className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                  >
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      {relatedPkg.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                      {relatedPkg.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Example;