import React, { useState } from 'react';
import { FiShoppingCart, FiSearch, FiMenu, FiX, FiMoon, FiSun, FiUser, FiHeart } from 'react-icons/fi';

const Navigation = ({ cartItems, darkMode, setDarkMode, searchQuery, setSearchQuery, onSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-lg z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition">
            <div className="text-3xl font-bold gradient-text">🛍️</div>
            <span className="hidden sm:block text-2xl font-bold text-gray-900 dark:text-white">
              ShopMart
            </span>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 mx-8 max-w-md">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && onSearch()}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                           bg-gray-50 dark:bg-gray-800 dark:text-white
                           focus:outline-none focus:ring-2 focus:ring-blue-500
                           transition-all duration-300"
              />
              <button
                onClick={onSearch}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500"
              >
                <FiSearch size={20} />
              </button>
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              title={darkMode ? 'Light Mode' : 'Dark Mode'}
            >
              {darkMode ? (
                <FiSun size={20} className="text-yellow-500" />
              ) : (
                <FiMoon size={20} className="text-gray-700" />
              )}
            </button>

            {/* Wishlist */}
            <button
              className="hidden sm:flex p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition relative"
              title="Wishlist"
            >
              <FiHeart size={20} className="text-gray-700 dark:text-gray-300" />
            </button>

            {/* User */}
            <button
              className="hidden sm:flex p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              title="User Account"
            >
              <FiUser size={20} className="text-gray-700 dark:text-gray-300" />
            </button>

            {/* Cart */}
            <button
              className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              title="Shopping Cart"
            >
              <FiShoppingCart size={20} className="text-gray-700 dark:text-gray-300" />
              {cartItems > 0 && (
                <span className="absolute top-1 right-1 bg-red-500 text-white text-xs 
                               rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cartItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {mobileMenuOpen ? (
                <FiX size={24} className="text-gray-700 dark:text-gray-300" />
              ) : (
                <FiMenu size={24} className="text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 animate-slide-up">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && onSearch()}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                           bg-gray-50 dark:bg-gray-800 dark:text-white
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={onSearch}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500"
              >
                <FiSearch size={20} />
              </button>
            </div>
            <div className="mt-4 flex gap-2">
              <button className="flex-1 p-2 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                <FiUser size={20} className="mx-auto text-gray-700 dark:text-gray-300" />
              </button>
              <button className="flex-1 p-2 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                <FiHeart size={20} className="mx-auto text-gray-700 dark:text-gray-300" />
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
