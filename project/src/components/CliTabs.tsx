import React, { useState } from 'react'
// import fs from 'node:fs';
// import test from '../util/test';
import data from '../utils/DocsData.json';
// import Markdown from 'react-markdown';
import MarkdownComp from './MarkdownComp';
import MarkdownPreview from '@uiw/react-markdown-preview';

export const CliTabs: React.FC = ()=> {
    const [sdkActiveTab, setSdkActiveTab] = useState<string>('initial setup')

    // const jsonString = fs.readFileSync('../util/DocsData.json', 'utf-8');
    // const data = JSON.parse(jsonString);

    

    const innerSdkTabs = [
        {
            name:"initial setup",
            label:"Initial Setup",
            // content : "This is Initial Step to run the application"
            content: data.SDK.initial_setup // here we can read the json to get the md file whic is need to be shown
        },
        {
            name:"publish",
            label:"Publish",
            content:"Steps on how to publish the website" // here we can read the json to get the md file whic is need to be shown
        }
    ]
    return(
        <div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-start justify-between mb-6">
            <div>
            {innerSdkTabs.map((tab)=>(
                <button
                key={tab.name}
                onClick={()=>setSdkActiveTab(tab.name)}
                className={`${
                    sdkActiveTab===tab.name
                    ? 'border-blue-500 text-blue-600 w-28'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 w-28'}
                    whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm capitalize`}
                    >
                        {tab.label}
                    </button>
            ))}
            </div>
          </div>
        </div>

        {/* content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        {/* {tabs.find(tab => tab.name === activeTab)?.content} */}
            {/* <MarkdownComp markdown={innerSdkTabs.find(tab=> tab.name === sdkActiveTab)?.content || ''}/> */}
            {/* <MarkdownPreview source ={innerSdkTabs.find(tab=> tab.name === sdkActiveTab)?.content || ''} /> */}
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Salescode Documentation
              </h1>
              {/* <MarkdownPreview source ={data.SDK.initial_setup} /> */}
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Prerequisites
              </p>
              <ul>
                <li>
                    <h2 className='text-gray-600 dark:text-gray-300 text-lg'><strong>1. Flutter</strong></h2>
                    <p className='text-md text-gray-600 dark:text-gray-300'>
                        The Salescode SDK uses flutter to build multiplatform native and web apps. Hence, it is required that the user has the latest version of Flutter SDK installed in their system.
                    </p>
                    <p className='text-gray-600 dark:text-gray-300 text-sm'>
                        To download the Flutter SDK <a href="https://docs.flutter.dev/get-started/install" target="_blank" className='text-blue-700 dark:text-blue-400' >Click Here</a>
                    </p>
                </li>

                <li>
                    <h2 className='text-gray-600 dark:text-gray-300 text-lg'><strong>2. NPM</strong></h2>
                    <p className='text-gray-600 dark:text-gray-300 text-md'>
                        The Salescode CLI has to be downloaded using the Node Package Manager (NPM). NPM can be downloaded along with Node JS.
                    </p>
                    <p className='text-gray-600 dark:text-gray-300 text-sm'>
                        To download Node JS and NPM <a href="https://nodejs.org/en/download/package-manager" target="_blank" className='text-blue-700 dark:text-blue-400' >Click Here</a>
                    </p>
                </li>
            </ul>
        </div>
        </div>
    )
}