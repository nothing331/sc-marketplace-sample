import React from 'react'


export const AboutUs: React.FC = ()=> {
  return (
    <div>
    <div className='flex flex-col items-center'>
        <div className='text-4xl font-bold text-gray-900 dark:text-white pt-5'>
            About us
        </div>
        <p className='text-center text-lg text-gray-700 dark:text-gray-300 mt-4 max-w-3xl'>
            SalesCode.ai is the world's first intelligent RTM platform for CPG sales. We are on a mission to reinvent every sales and RTM process and automation, invented in the last 30 years, with AI and eB2B, for guaranteed sales uplift!! Led by sales experts and marquee investors with sales expertise, we are a team of 170+ professionals working with 65+ top CPG brands across 18+ countries. We have a combined user base of 3M+ users and have executed 1B+ transactions on our platforms. Welcome to SalesCode.ai!
        </p>
    </div>
    </div>
  )
}

export default AboutUs;