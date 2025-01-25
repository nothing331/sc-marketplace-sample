import React, { useState } from 'react'
import { CliTabs } from '../components/CliTabs'
import { SdkTabs } from '../components/SdkTabs'

export const DocsPage: React.FC = ()=> { 

    const [activeTab,setActiveTab] = useState<string>("sdk");

    const tabs = [
        {
            name:"sdk",
            label:"SDK",
            content:<SdkTabs />
        },
        {
            name:"cli",
            label:"CLI",
            content:<CliTabs/>
        }
    ]
    return(
        <div className='flex justify-center'>
        <div className='relative flex flex-col items-center justify-center w-5/6'>
            <div className="flex flex-row justify-center w-full ">
                {tabs.map((tab)=>(
                    <button
                    key={tab.name}
                    onClick={()=>setActiveTab(tab.name)}
                    className={`${
                        activeTab===tab.name
                        ? 'border-blue-500 text-blue-600 w-28'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 w-28'}
                        whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm capitalize`}
                        >
                            {tab.label}
                        </button>
                ))}
            </div>
            <div  className='p-5 '>
                {tabs.find(tab => tab.name === activeTab)?.content}
            </div>
        </div>
        </div>
    )
}