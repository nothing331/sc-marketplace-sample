import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Eye, MessageSquare, Clock, Package as PackageIcon } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { ReadmeTab } from '../components/Readme';
import { ReviewsTab } from '../components/Review';
import { Review } from '../types/reviews';
import { ChangelogTab } from '../components/Chnagelog';
import { Changelog } from '../types/changelog';
import { PackageCard } from '../components/PackageCard';



interface Version {
  version: string;
  releaseDate: string;
  changes: string[];
}

export const PackageDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<string>('readme');
  
  const packageDetails = useSelector((state: RootState) => 
    state.packages.items.find(p => p.id === id)
  );

  const { items  } = useSelector((state: RootState) => state.packages);
  const relatedPackage=items.slice(0,3);

  const mockVersions: Changelog[] = [
    {
      version: '1.2.0',
      releaseDate: '2024-02-17',
      changes: [
        'Added new animation features',
        'Fixed performance issues',
        'Updated documentation'
      ]
    },
    {
      version: '1.1.0',
      releaseDate: '2024-02-15',
      changes: [
        'Added new animation features',
        'Fixed performance issues',
      ]
    },
    {
      version: '0.2.0',
      releaseDate: '2023-05-15',
      changes: [
        'Updated documentation'
      ]
    },
    {
      version: '0.1.0',
      releaseDate: '2023-02-15',
      changes: [
        'Added new animation features',
        'Fixed performance issues',
        'Updated documentation'
      ]
    },
  ];

  const mockReview : Review[]=[
    {
      id: '1',
      userName: 'John Doe',
      rating: 5,
      comment: 'Excellent package! Very easy to use and well documented.',
      createdAt: '2024-02-20T10:00:00Z'
    },
    {
      id: '2',
      userName: 'John Doe2',
      rating: 3,
      comment: 'Excellent package! Very easy to use and well documented.',
      createdAt: '2024-02-20T10:00:00Z'
    },
    {
      id: '3',
      userName: 'John Doe3',
      rating: 1,
      comment: 'Worse package.',
      createdAt: '2024-02-20T10:00:00Z'
    }
  ]

  if (!packageDetails) return null;

  const tabs = [
    {
      name: 'readme',
      label: 'Readme',
      content: <ReadmeTab screenshots={packageDetails.screenshots}/>
    },
    {
      name: 'reviews',
      label: 'Reviews',
      content: <ReviewsTab reviews={mockReview}/>
    },
    {
      name: 'changelog',
      label: 'Changelog',
      content: <ChangelogTab versions={mockVersions}/>
    }
  ];

  if (!packageDetails) return null;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {packageDetails.name}
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                {packageDetails.description}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-1" />
                <span className="text-lg font-semibold">{packageDetails.rating.toFixed(1)}</span>
              </div>
              <div className="flex items-center">
                <Eye className="w-5 h-5 text-gray-500 mr-1" />
                <span className="text-lg">{packageDetails.downloads.toLocaleString()}</span>
              </div>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`${
                    activeTab === tab.name
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm capitalize`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
        
        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Dynamically render the active tab content */}
            {tabs.find(tab => tab.name === activeTab)?.content}
          </div>
          
          {/* Sidebar */}
          <div className="space-y-8">
            {/* Author info */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                About the Author
              </h3>
              <div className="flex items-center mb-4">
                <img
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(packageDetails.author)}`}
                  alt={packageDetails.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {packageDetails.author}
                  </h4>
                  <p className="text-sm text-gray-500">Package Developer</p>
                </div>
              </div>
            </div>
            
            {/* Related packages */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                You May Also Like
              </h3>
              <div className="space-y-4">
                {relatedPackage.map((pkg) => (
                  <PackageCard key={pkg.id} package={pkg}  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
