import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Eye, MessageSquare, Clock, Package as PackageIcon } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { PackageCard } from '../components/PackageCard';

interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: string;
}

interface Version {
  version: string;
  releaseDate: string;
  changes: string[];
}

export const PackageDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<'overview' | 'reviews' | 'versions'>('overview');
  const [newReview, setNewReview] = useState('');
  const [rating, setRating] = useState(0);
  
  // Mock data - replace with actual data from your store
  const packageDetails = useSelector((state: RootState) => 
    state.packages.items.find(p => p.id === id)
  );
  
  const relatedPackages = useSelector((state: RootState) => 
    state.packages.items.filter(p => p.id !== id).slice(0, 3)
  );

  const mockReviews: Review[] = [
    {
      id: '1',
      userId: '1',
      userName: 'John Doe',
      rating: 5,
      comment: 'Excellent package! Very easy to use and well documented.',
      createdAt: '2024-02-20T10:00:00Z'
    },
    // Add more mock reviews
  ];

  const mockVersions: Version[] = [
    {
      version: '1.2.0',
      releaseDate: '2024-02-15',
      changes: [
        'Added new animation features',
        'Fixed performance issues',
        'Updated documentation'
      ]
    },
    // Add more versions
  ];

  if (!packageDetails) return null;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
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
              {(['overview', 'reviews', 'versions'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`${
                    activeTab === tab
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm capitalize`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
        </div>
        
        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {activeTab === 'overview' && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  Screenshots
                </h2>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <img
                    src={packageDetails.thumbnail}
                    alt="Screenshot 1"
                    className="rounded-lg w-full h-48 object-cover"
                  />
                  <img
                    src={packageDetails.thumbnail}
                    alt="Screenshot 2"
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>
                
                <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  Features
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Feature 1</li>
                  <li>Feature 2</li>
                  <li>Feature 3</li>
                </ul>
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                {/* Add review form */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                    Write a Review
                  </h3>
                  <div className="flex items-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => setRating(star)}
                        className={`${
                          star <= rating ? 'text-yellow-400' : 'text-gray-300'
                        } hover:text-yellow-400`}
                      >
                        <Star className="w-6 h-6" />
                      </button>
                    ))}
                  </div>
                  <textarea
                    value={newReview}
                    onChange={(e) => setNewReview(e.target.value)}
                    placeholder="Share your experience with this package..."
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    rows={4}
                  />
                  <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg">
                    Submit Review
                  </button>
                </div>
                
                {/* Reviews list */}
                <div className="space-y-6">
                  {mockReviews.map((review) => (
                    <div
                      key={review.id}
                      className="border-b border-gray-200 dark:border-gray-700 last:border-0 pb-6"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <span className="font-semibold text-gray-900 dark:text-white mr-2">
                            {review.userName}
                          </span>
                          <div className="flex">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating
                                    ? 'text-yellow-400'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">
                          {new Date(review.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'versions' && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div className="space-y-6">
                  {mockVersions.map((version) => (
                    <div
                      key={version.version}
                      className="border-b border-gray-200 dark:border-gray-700 last:border-0 pb-6"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          Version {version.version}
                        </h3>
                        <span className="text-sm text-gray-500">
                          {new Date(version.releaseDate).toLocaleDateString()}
                        </span>
                      </div>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                        {version.changes.map((change, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-2">•</span>
                            {change}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
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
                {relatedPackages.map((pkg) => (
                  <PackageCard key={pkg.id} packageDetails={pkg} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};