import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, onAddToCart, onWishlist, loading }) => {
  return (
    <section className="py-12 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Featured Products
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Discover our handpicked selection of premium products
        </p>

        {loading ? (
          // Loading Skeleton
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                <div className="h-48 md:h-56 skeleton" />
                <div className="p-4 space-y-3">
                  <div className="h-4 skeleton rounded" />
                  <div className="h-4 skeleton rounded w-3/4" />
                  <div className="h-8 skeleton rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="animate-fade-in">
                <ProductCard
                  product={product}
                  onAddToCart={onAddToCart}
                  onWishlist={onWishlist}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No products found. Try adjusting your filters or search query.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
