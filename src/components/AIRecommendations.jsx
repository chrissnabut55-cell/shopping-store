import React from 'react';
import { FiTrendingUp } from 'react-icons/fi';

const AIRecommendations = ({ products }) => {
  const recommendedProducts = products.slice(0, 4);

  return (
    <section className="py-12 px-4 bg-gradient-to-r from-purple-50 to-blue-50
                      dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <FiTrendingUp size={28} className="text-purple-600" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Recommended For You
          </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          AI-powered suggestions based on your browsing history
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden card-shadow
                       hover:shadow-2xl transition-all duration-300 group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-700">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-purple-600 text-white px-3 py-1 rounded-full
                            text-xs font-bold badge-pulse">
                  AI Pick
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white truncate-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {product.category}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                    ${product.price}
                  </span>
                  <button className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded
                                   text-sm font-semibold transition">
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIRecommendations;
