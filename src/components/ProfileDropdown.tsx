import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const ProfileDropdown: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const userImage = "https://picsum.photos/seed/1/800/600"; 
  const dummyImage = "https://picsum.photos/seed/1/800/600";

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleLogin = () => {
    // Implement login logic
    console.log('Login');
  };

  const handleSignup = () => {
    // Implement signup logic
    console.log('Signup');
  };

  const handleLogout = () => {
    // Implement logout logic
    console.log('Logout');
  };

  const handleProfile = () => {
    // Navigate to profile page
    console.log('Profile');
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center focus:outline-none"
      >
        <img
          src={isLoggedIn ? userImage : dummyImage}
          alt="Profile"
          className="w-10 h-10 rounded-full border-2 border-gray-300 dark:border-gray-600"
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg py-2">
          {isLoggedIn ? (
            <>
              <button
                onClick={handleProfile}
                className="block w-full text-left px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Profile
              </button>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleLogin}
                className="block w-full text-left px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Login
              </button>
              <button
                onClick={handleSignup}
                className="block w-full text-left px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Signup
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};
