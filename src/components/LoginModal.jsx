import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

const LoginModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${isLogin ? 'Logged' : 'Registered'} successfully!`);
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Modal */}
      <div
        className={`fixed inset-0 flex items-center justify-center z-50 transition-all duration-300
                   ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-md p-8 mx-4
                      transform transition-transform duration-300"
             onClick={(e) => e.stopPropagation()}>
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
          >
            <FiX size={24} className="text-gray-700 dark:text-gray-300" />
          </button>

          <h2 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                           bg-gray-50 dark:bg-gray-800 dark:text-white
                           focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  required
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                         bg-gray-50 dark:bg-gray-800 dark:text-white
                         focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                         bg-gray-50 dark:bg-gray-800 dark:text-white
                         focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                required
              />
            </div>

            {isLogin && (
              <div className="flex justify-between items-center text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded" />
                  <span className="text-gray-600 dark:text-gray-400">Remember me</span>
                </label>
                <a href="#" className="text-blue-500 hover:text-blue-600 font-semibold">
                  Forgot Password?
                </a>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600
                       hover:to-blue-700 text-white font-bold rounded-lg transition-all duration-300
                       transform hover:scale-105 mt-6"
            >
              {isLogin ? 'Login' : 'Create Account'}
            </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-600" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-gray-900 text-gray-500">Or</span>
            </div>
          </div>

          <div className="space-y-3">
            <button className="w-full py-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg
                             text-gray-900 dark:text-white font-semibold hover:bg-gray-50
                             dark:hover:bg-gray-800 transition">
              🔵 Google
            </button>
            <button className="w-full py-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg
                             text-gray-900 dark:text-white font-semibold hover:bg-gray-50
                             dark:hover:bg-gray-800 transition">
              📘 Facebook
            </button>
          </div>

          <p className="text-center text-gray-600 dark:text-gray-400 mt-6">
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-500 hover:text-blue-600 font-semibold"
            >
              {isLogin ? 'Sign Up' : 'Login'}
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
