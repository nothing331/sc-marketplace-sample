import React, { useState } from 'react'
// import fs from 'node:fs';
// import test from '../util/test';
import data from '../utils/DocsData.json';
// import Markdown from 'react-markdown';
import MarkdownComp from './MarkdownComp';
import MarkdownPreview from '@uiw/react-markdown-preview';

export const CliTabs: React.FC = ()=> {
    const [sdkActiveTab, setSdkActiveTab] = useState<string>('prerequisites')

    // const jsonString = fs.readFileSync('../util/DocsData.json', 'utf-8');
    // const data = JSON.parse(jsonString);

    

    const innerCLITabs = [
        {
            name: "prerequisites",
            label:"Prerequisites",
            content: data.CLI.prerequisites
        },
        {
            name:"initial setup",
            label:"Initial Setup",
            // content : "This is Initial Step to run the application"
            content: data.CLI.initial_setup // here we can read the json to get the md file whic is need to be shown
        },
        {
            name:"publish",
            label:"Publish",
            content: data.CLI.publishing // here we can read the json to get the md file whic is need to be shown
        }
    ]
    return(
        <div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8 ">
          <div className="flex items-start justify-between mb-6">
          <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Salescode Documentation
            </h1>
            
            {innerCLITabs.map((tab)=>(
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
            <MarkdownComp markdown={innerCLITabs.find(tab=> tab.name === sdkActiveTab)?.content}/>
        </div>
        </div>
    )
}