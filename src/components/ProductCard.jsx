import React from 'react';
import { FiStar, FiShoppingCart, FiHeart } from 'react-icons/fi';

const ProductCard = ({ product, onAddToCart, onWishlist }) => {
  const discountPercentage = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden card-shadow transition-all duration-300">
      {/* Image Container */}
      <div className="relative h-48 md:h-56 bg-gray-200 dark:bg-gray-700 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Discount Badge */}
        {product.discount > 0 && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full
                        font-bold text-sm shadow-lg badge-pulse">
            -{product.discount}%
          </div>
        )}

        {/* Stock Status */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-bold text-xl">Out of Stock</span>
          </div>
        )}

        {/* Quick Actions */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent
                      p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex gap-2">
            <button
              onClick={() => onAddToCart(product)}
              disabled={!product.inStock}
              className="flex-1 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white py-2 rounded-lg
                       font-semibold flex items-center justify-center gap-2 transition-colors duration-300"
            >
              <FiShoppingCart size={18} />
              <span className="hidden sm:inline">Add</span>
            </button>
            <button
              onClick={() => onWishlist(product)}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg transition-colors duration-300"
            >
              <FiHeart size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Category */}
        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
          {product.category}
        </p>

        {/* Name */}
        <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white truncate-2 mb-2">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <FiStar
                key={i}
                size={14}
                className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
              />
            ))}
          </div>
          <span className="text-xs text-gray-600 dark:text-gray-400">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg md:text-xl font-bold text-blue-600 dark:text-blue-400">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice > product.price && (
            <span className="text-sm text-gray-400 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => onAddToCart(product)}
          disabled={!product.inStock}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700
                   disabled:from-gray-400 disabled:to-gray-400 text-white font-semibold py-2 rounded-lg
                   transition-all duration-300 flex items-center justify-center gap-2"
        >
          <FiShoppingCart size={18} />
          <span className="hidden sm:inline">Add to Cart</span>
          <span className="sm:hidden">Add</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
