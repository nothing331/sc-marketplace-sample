import React from 'react';
import { Changelog } from '../types/changelog';


interface ChangelogTabProps {
  versions: Changelog[];
}

export const ChangelogTab: React.FC<ChangelogTabProps> = ({ versions }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="space-y-6">
        {versions.map((version) => (
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
  );
};
