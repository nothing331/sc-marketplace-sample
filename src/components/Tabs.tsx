import React, { useState } from 'react';
import MarkdownComponent from './MarkdownComponent';

export interface TabsData {
  [tabName: string]: string;
}

interface DocTabsProps {
  tabsData: TabsData;
}

const createSortedTabs = (tabsData: TabsData): string[] => {
  const tabKeys = Object.keys(tabsData);
  
  const startWithReadme = tabKeys.filter(tab => 
    tab.toLowerCase().startsWith('readme')
  );
  
  const startWithInstallation = tabKeys.filter(tab => 
    tab.toLowerCase().startsWith('installation')
  );
  
  const prioritizedTabs = [
    ...startWithReadme,
    ...startWithInstallation,
    ...tabKeys.filter(tab => 
      !startWithReadme.includes(tab) && 
      !startWithInstallation.includes(tab)
    )
  ];
  
  return [...new Set(prioritizedTabs)];
};

export const Tabs: React.FC<DocTabsProps> = ({ tabsData }) => {
  const sortedTabs = createSortedTabs(tabsData);
  const [activeTab, setActiveTab] = useState(sortedTabs[0]);


  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-row justify-center w-full">
        {sortedTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`${
              activeTab === tab
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm capitalize w-32`}
          >
            {tab.split('.')[0]}
          </button>
        ))}
      </div>
      <div className='w-full'>
        <MarkdownComponent markdown={tabsData[activeTab]} />
      </div>
    </div>
  );
};
