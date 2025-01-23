import React from 'react';
import { Star, Eye } from 'lucide-react';
import { Package } from '../types/package';
import { useDispatch, useSelector } from 'react-redux';
import { toggleStar } from '../store/slices/packagesSlice';
import { RootState } from '../store/store';
import { useNavigate } from 'react-router-dom';

interface PackageCardProps {
  package: Package;
}

export const PackageCard: React.FC<PackageCardProps> = ({ package: pkg }) => {
  const dispatch = useDispatch();
  const starredPackages = useSelector((state: RootState) => state.packages.starredPackages);
  const isStarred = starredPackages.includes(pkg._id);
  const navigate=useNavigate();
  const handlePackageClick = (event: React.MouseEvent<HTMLDivElement>, packageId: string) => {
    event.preventDefault();
    navigate(`/package/${packageId}`);
  };

  return (
    <div
      onClick={(event) => handlePackageClick(event, pkg._id)}
      className="bg-white hover:cursor-pointer dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg"
    >
      <img
        // src={pkg.thumbnail}
        alt={pkg.packageName}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {pkg.packageName}
          </h3>
          <button
            onClick={(e) => {
              e.stopPropagation();
              dispatch(toggleStar(pkg._id));
            }}
            className={`p-1 rounded-full transition-colors ${
              isStarred
                ? 'text-yellow-400 hover:text-yellow-500'
                : 'text-gray-400 hover:text-yellow-400'
            }`}
          >
            <Star className="w-5 h-5 fill-current" />
          </button>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          {pkg.description}
        </p>
        <TruncateText text={pkg.description}/>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400" />
              {/* <span className="text-sm text-gray-600 dark:text-gray-300">
                {pkg.rating.toFixed(1)}
              </span> */}
            </div>
            <div className="flex items-center space-x-1">
              <Eye className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              {/* <span className="text-sm text-gray-600 dark:text-gray-300">
                {pkg.downloads.toLocaleString()}
              </span> */}
            </div>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            by {pkg.user.username}
          </span>
        </div>
      </div>
    </div>
  );
};



interface TruncateTextProp{
  text: string;
  wordLimit?: number;
}

const TruncateText= ({text, wordLimit=60}: TruncateTextProp) =>{
    const word = text;
    const shouldTruncate = word.length > wordLimit;
    const displayText = shouldTruncate ? word.slice(0, wordLimit) : text;

    return(
      <p className="text-sm text-gray-600 dark:text-gray-400">
        {displayText}
        {shouldTruncate && (
          <span className="text-gray-500">...</span>
        )}
      </p>
    )
}