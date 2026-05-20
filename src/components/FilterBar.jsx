import React, { useState } from 'react';
import { FiFilter, FiChevronDown } from 'react-icons/fi';

const FilterBar = ({ categories, onFilterChange, priceRange, onPriceChange, sortBy, onSortChange }) => {
  const [showPriceFilter, setShowPriceFilter] = useState(false);
  const [showCategoryFilter, setShowCategoryFilter] = useState(false);

  return (
    <section className="py-6 px-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <FiFilter size={24} className="text-gray-700 dark:text-gray-300" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Filters</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Category Filter */}
          <div>
            <button
              onClick={() => setShowCategoryFilter(!showCategoryFilter)}
              className="w-full flex items-center justify-between p-3 border border-gray-300 dark:border-gray-600
                       rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700
                       transition-colors duration-300"
            >
              <span className="font-semibold text-gray-900 dark:text-white">Category</span>
              <FiChevronDown
                size={20}
                className={`transform transition-transform ${showCategoryFilter ? 'rotate-180' : ''}`}
              />
            </button>
            {showCategoryFilter && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-300
                           dark:border-gray-600 rounded-lg shadow-lg z-20 w-48">
                {categories.map((category) => (
                  <label
                    key={category.id}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      onChange={(e) => onFilterChange('category', category.name, e.target.checked)}
                      className="w-4 h-4 rounded cursor-pointer"
                    />
                    <span className="text-gray-900 dark:text-white">{category.name}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Price Range Filter */}
          <div>
            <button
              onClick={() => setShowPriceFilter(!showPriceFilter)}
              className="w-full flex items-center justify-between p-3 border border-gray-300 dark:border-gray-600
                       rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700
                       transition-colors duration-300"
            >
              <span className="font-semibold text-gray-900 dark:text-white">Price Range</span>
              <FiChevronDown
                size={20}
                className={`transform transition-transform ${showPriceFilter ? 'rotate-180' : ''}`}
              />
            </button>
            {showPriceFilter && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-300
                           dark:border-gray-600 rounded-lg shadow-lg z-20 p-4 w-56">
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-1">
                      Min: ${priceRange[0]}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="2000"
                      value={priceRange[0]}
                      onChange={(e) => onPriceChange([parseInt(e.target.value), priceRange[1]])}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-1">
                      Max: ${priceRange[1]}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="2000"
                      value={priceRange[1]}
                      onChange={(e) => onPriceChange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Discount Filter */}
          <div>
            <button className="w-full flex items-center justify-between p-3 border border-gray-300 dark:border-gray-600
                       rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700
                       transition-colors duration-300">
              <span className="font-semibold text-gray-900 dark:text-white">On Sale</span>
              <input type="checkbox" className="w-4 h-4 rounded cursor-pointer" />
            </button>
          </div>

          {/* Sort By */}
          <div>
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="w-full px-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg
                       bg-gray-50 dark:bg-gray-800 dark:text-white font-semibold cursor-pointer
                       focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              <option value="relevance">Sort by Relevance</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest First</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterBar;
