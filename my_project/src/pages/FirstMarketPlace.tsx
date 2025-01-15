import React, { createContext } from 'react'
import "./FirstMarketPlace.css"
import SearchBar from '../components/SearchBar'
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router';
import { RootState } from '../store/store';
import { logout } from '../store/slices/authSlice';


const FirstMarketPlace: React.FC = () => {  

  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  return(
    <div>
      <div className='above-nav'>
      <div className="flex items-center space-x-4">
        {isAuthenticated ? (
                <>
                  <Link
                    to="/profile"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    {user?.avatar && (
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="h-8 w-8 rounded-full"
                      />
                    )}
                    <span className="ml-2">{user?.name}</span>
                  </Link>
                  <button
                    onClick={() => dispatch(logout())}
                    className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="pr-3 text-gray-700 dark:text-gray-300  hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    Sign Up
                  </Link>
                </>
              )}
        </div>
      </div>
      <div className="main-nav">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Salescode Marketplace
        </h1>
        <p className="text-xl text-wrap text-white/90 mb-12 max-w-2xl mx-auto animate-fade-in-delayed">
          Discover, share, and integrate powerful Flutter packages to build exceptional applications.
        </p>
        <SearchBar/>
        <div className="m-3 text-black drop-shadow-md">Search for more Popular templates</div>
        <div className="flex m-2">
          <PopularBtn name={'chat'}/>
          <PopularBtn name={'ai'}/>
          <PopularBtn name={'chat'}/>
        </div>
      </div>
    </div>
    

  )
}

const PopularBtn = ({ name }: { name: string }) => {
  const navigate = useNavigate();
  const hdlclick = ()=>{
    navigate(`/marketplace?input=${encodeURIComponent(name)}`)
  }
  return (
    <div className="h-4 w-10 bg-purple-300 flex items-center justify-center py-4 px-6 rounded-lg border border-purple-900 mx-1">
      <button className="m-3"
      onClick={hdlclick}>{name}</button>
    </div>
  );
};

export default FirstMarketPlace