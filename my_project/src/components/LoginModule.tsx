import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router";
import { login } from "../store/slices/authSlice";

const LoginModule: React.FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login
    dispatch(
      login({
        id: "1",
        name: "John Doe",
        email: email,
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
        packages: [],
        starredPackages: [],
      })
    );
    navigate("/marketplace");
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen min-w-full">
        <div className="w-full max-w-md p-8 space-y-6 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-xl drop-shadow-md">
          <h2 className="text-2xl font-bold text-center text-black dark:text-white">
            SalesCode MarketPlace
          </h2>
          <p className="text-center text-l text-gray-500 dark:text-gray-400">Login to Your Account</p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 text-black dark:text-white bg-blue-200 focus:bg-gray-300  dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-500 focus:outline-none"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 text-black dark:text-white bg-blue-200 focus:bg-gray-300  dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-500 focus:outline-none"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button
              type="submit"
              className="w-full px-4 py-2 font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600"
            >
              Create Account
            </button>
          </form>
          <p className="text-center text-l text-gray-500 dark:text-gray-400">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-500 hover:underline">
              Signup
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModule;
