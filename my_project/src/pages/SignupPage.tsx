import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router';
import { login } from '../store/slices/authSlice';
import DemoLogin from '../components/DemoLogin';


const SignupPage: React.FC = () => {

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
    return(
        <div className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 animate-gradient-xy"></div>
        <div className="relative min-h-screen backdrop-blur-sm bg-white/10 dark:bg-black/10 flex flex-col">
            <div className="flex-grow flex flex-col items-center justify-center px-4 mt-4 mb-4 sm:mt-8 sm:mb-8">
            {/* <div>
                <section className="bg-gray-50 dark:bg-gray-900 md:max-h-screen rounded-lg">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        SalesCode MarketPlace
                    </a>
                    <div className="w-full bg-white rounded-lg shadow border  dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign up to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="John"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            </div>
                            <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@company.com"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            </div>
                            <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="••••••••"
                                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            </div>
                            <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                <input
                                    id="remember"
                                    aria-describedby="remember"
                                    type="checkbox"
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                />
                                </div>
                                <div className="ml-3 text-sm">
                                <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                </div>
                            </div>
                            <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                            </div>
                            <button
                            type="submit"
                            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                            Sign in
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an accout?{' '}
                            <Link
                                to="/login"
                                className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400"
                                >
                                Sign in
                            </Link>
                            </p>
                        </form>
                        </div>
                    </div>
                    </div>
                </section>
            </div> */}
            <DemoLogin/>
            </div>
        </div>
        
    </div>
    )
}

export default SignupPage;