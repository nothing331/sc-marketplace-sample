import React, { useState } from 'react';
import data from '../utils/DocsData.json';
import { Tabs } from '../components/Tabs';

interface DocsData {
  [section: string]: {
    [tabName: string]: string;
  };
}

const typedData: DocsData = data;

export const DocsPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<keyof typeof typedData>(
    Object.keys(typedData)[0] as keyof typeof typedData
  );

  return (
    <div className="flex flex-col items-center justify-center w-5/6 mx-auto">
      <div className="flex flex-row justify-center w-full">
        {Object.keys(typedData).map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section as keyof typeof typedData)}
            className={`${
              activeSection === section
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm capitalize w-32`}
          >
            {section}
          </button>
        ))}
      </div>
      <div className="mt-4 w-full">
        <Tabs key={activeSection} tabsData={typedData[activeSection]}/>
      </div>
    </div>
  );
};
