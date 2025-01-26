import React, { useState } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const NAV_ITEMS = [
 { title: 'Home', redirect: '/marketplace' },
 { title: 'Docs', redirect: '/docs' },
 { title: 'About Us', redirect: '/about' },
];

export const NavbarWithMegaMenu: React.FC = () => {
 const [isOpen, setIsOpen] = useState(false);
 const { user } = useSelector((state: RootState) => state.auth);
 const navigate = useNavigate();
 const location = useLocation();

 if (location.pathname === "/") return null;

 const handleRedirect = (redirect: string) => {
   navigate(redirect);
   setIsOpen(false);
 };

 return (
   <header className="bg-white shadow-md transition-colors duration-200 dark:bg-gray-900 dark:shadow-gray-800/30">
     <div className="mx-auto max-w-screen-xl px-4 py-2">
       <div className="flex items-center justify-between">
         <a onClick={() => navigate("/")}  className="text-xl font-bold text-gray-900 dark:text-white hover:cursor-pointer">
           Sales<span className="text-blue-500 dark:text-blue-400">code</span>
         </a>

         <nav className="hidden lg:flex items-center gap-6">
           {NAV_ITEMS.map((item, index) => (
             <button
               key={index}
               onClick={() => handleRedirect(item.redirect)}
               className="rounded-lg px-4 py-2 text-gray-900 transition-colors duration-200 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800"
             >
               {item.title}
             </button>
           ))}
         </nav>

         <div className="hidden lg:flex items-center gap-4">
           <ThemeToggle />
           {!user ? (
             <div className="flex gap-2">
               <button 
                 onClick={() => navigate("/login")} 
                 className="rounded-lg border border-gray-300 px-4 py-2 text-gray-900 transition-colors duration-200 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-100 dark:hover:bg-gray-800"
               >
                 Log In
               </button>
               <button 
                 onClick={() => navigate("/signup")} 
                 className="rounded-lg bg-blue-500 px-4 py-2 text-white transition-colors duration-200 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
               >
                 Sign Up
               </button>
             </div>
           ) : (
             user.avatarUrl && (
               <img
                 src={user.avatarUrl}
                 alt={user.displayName}
                 className="h-8 w-8 rounded-full cursor-pointer border-2 border-red-500 shadow-lg"
                 onClick={() => handleRedirect("profile")}
               />
             )
           )}
         </div>

         <div className="lg:hidden flex items-center gap-4">
           <ThemeToggle />
           <button
             onClick={() => setIsOpen(!isOpen)}
             className="rounded-lg p-2 text-gray-900 transition-colors duration-200 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800"
           >
             {isOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
           </button>
         </div>
       </div>

       {isOpen && (
         <div className="mt-4 border-t border-gray-200 pt-4 dark:border-gray-700 lg:hidden">
           <nav className="flex flex-col items-center gap-2">
             {NAV_ITEMS.map((item, index) => (
               <button
                 key={index}
                 onClick={() => handleRedirect(item.redirect)}
                 className="w-full max-w-xs rounded-lg px-4 py-2 text-center text-gray-900 transition-colors duration-200 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800"
               >
                 {item.title}
               </button>
             ))}
           </nav>
           {!user && (
             <div className="mt-4 flex flex-col items-center gap-2">
               <button 
                 onClick={() => handleRedirect("/login")} 
                 className="w-full max-w-xs rounded-lg border border-gray-300 px-4 py-2 text-center text-gray-900 transition-colors duration-200 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-100 dark:hover:bg-gray-800"
               >
                 Log In
               </button>
               <button 
                 onClick={() => handleRedirect("/signup")} 
                 className="w-full max-w-xs rounded-lg bg-blue-500 px-4 py-2 text-center text-white transition-colors duration-200 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
               >
                 Sign Up
               </button>
             </div>
           )}
           {user?.avatarUrl && (
             <img
               src={user.avatarUrl}
               alt={user.displayName}
               className="h-8 w-8 rounded-full cursor-pointer mt-2"
               onClick={() => handleRedirect("profile")}
             />
           )}
         </div>
       )}
     </div>
   </header>
 );
};

export default NavbarWithMegaMenu;