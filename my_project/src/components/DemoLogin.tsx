import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router';
import { login } from '../store/slices/authSlice';

const DemoLogin: React.FC = () => {

    const dispatch = useDispatch();
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate();


    const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            // Mock login
            dispatch(login({
              id: '1',
              name: username,
              email: email,
              avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
              packages: [],
              starredPackages: []
            }));
            navigate('/marketplace');
          };
  return (
    <div className="flex items-center justify-center min-h-screen min-w-full">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-xl drop-shadow-md">
        <h2 className="text-2xl font-bold text-center text-white">SalesCode MarketPlace</h2>
        <p className="text-center text-xl text-gray-400">Create Account</p>
        <p className="text-center text-xs text-gray-500">
          By creating an account, you agree to accept our Terms of Service and Privacy Policy.
        </p>

        {/* <div className="space-y-4">
          <button className="w-full px-4 py-2 font-medium text-gray-900 bg-white rounded-lg">
            Sign in with Google
          </button>
          <button className="w-full px-4 py-2 font-medium text-white bg-gray-700 rounded-lg">
            Sign in with Apple
          </button>
          <button className="w-full px-4 py-2 font-medium text-white bg-gray-700 rounded-lg">
            Sign in with GitHub
          </button>
          <button className="w-full px-4 py-2 font-medium text-white bg-gray-700 rounded-lg">
            Sign in with Microsoft
          </button>
        </div> */}

        {/* <div className="text-center text-sm text-gray-400">Or continue with</div> */}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 text-white bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
            onChange={(e)=>{setUsername(e.target.value)}}
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 text-white bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
            onChange={(e)=>{setEmail(e.target.value)}}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 text-white bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
            onChange={(e)=>{setPassword(e.target.value)}}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 text-white bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="w-full px-4 py-2 font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Create Account
          </button>
        </form>
        <p className="text-center text-sm text-gray-400">
          Already have an account?{' '}
          <a href="/login" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default DemoLogin;