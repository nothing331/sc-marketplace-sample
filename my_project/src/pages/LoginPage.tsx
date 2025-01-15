import React from 'react'
import LoginModule from '../components/LoginModule'



const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 animate-gradient-xy"></div>
        <div className="relative min-h-screen backdrop-blur-sm bg-white/10 dark:bg-black/10 flex flex-col">
            <div className="flex-grow flex flex-col items-center justify-center px-4 mt-4 mb-4 sm:mt-8 sm:mb-8">
                <LoginModule/> 
            </div>
        </div>
        
    </div>
    
  )
}

export default LoginPage