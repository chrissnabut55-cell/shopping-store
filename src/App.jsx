import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import CategoriesSection from './components/CategoriesSection';
import ProductGrid from './components/ProductGrid';
import FilterBar from './components/FilterBar';
import SpecialOffers from './components/SpecialOffers';
import TestimonialsSection from './components/TestimonialsSection';
import FeaturedBrands from './components/FeaturedBrands';
import AIRecommendations from './components/AIRecommendations';
import ShoppingCart from './components/ShoppingCart';
import LoginModal from './components/LoginModal';
import Footer from './components/Footer';
import productsData from './data/products.json';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [products, setProducts] = useState(productsData.products);
  const [filteredProducts, setFilteredProducts] = useState(productsData.products);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [sortBy, setSortBy] = useState('relevance');
  const [loading, setLoading] = useState(false);

  // Apply filters and search
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      let filtered = products;

      // Search filter
      if (searchQuery.trim()) {
        filtered = filtered.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      // Category filter
      if (selectedCategories.length > 0) {
        filtered = filtered.filter((product) =>
          selectedCategories.includes(product.category)
        );
      }

      // Price filter
      filtered = filtered.filter(
        (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
      );

      // Sorting
      if (sortBy === 'price-low') {
        filtered.sort((a, b) => a.price - b.price);
      } else if (sortBy === 'price-high') {
        filtered.sort((a, b) => b.price - a.price);
      } else if (sortBy === 'rating') {
        filtered.sort((a, b) => b.rating - a.rating);
      }

      setFilteredProducts(filtered);
      setLoading(false);
    }, 300);
  }, [searchQuery, selectedCategories, priceRange, sortBy, products]);

  // Dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    alert(`${product.name} added to cart!`);
  };

  const handleUpdateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      setCartItems(cartItems.filter((item) => item.id !== productId));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const handleRemoveItem = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const handleFilterChange = (filterType, value, isChecked) => {
    if (filterType === 'category') {
      if (isChecked) {
        setSelectedCategories([...selectedCategories, value]);
      } else {
        setSelectedCategories(selectedCategories.filter((cat) => cat !== value));
      }
    }
  };

  const handleCategorySelect = (categoryName) => {
    if (selectedCategories.includes(categoryName)) {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== categoryName));
    } else {
      setSelectedCategories([categoryName]);
    }
  };

  const handleSearch = () => {
    // Search is already handled by useEffect
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* Navigation */}
        <Navigation
          cartItems={cartItems.length}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSearch={handleSearch}
        />

        {/* Hero Section */}
        <HeroSection />

        {/* Categories Section */}
        <CategoriesSection
          categories={productsData.categories}
          onCategorySelect={handleCategorySelect}
        />

        {/* Filter Bar */}
        <FilterBar
          categories={productsData.categories}
          onFilterChange={handleFilterChange}
          priceRange={priceRange}
          onPriceChange={setPriceRange}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        {/* Product Grid */}
        <ProductGrid
          products={filteredProducts}
          onAddToCart={handleAddToCart}
          onWishlist={(product) =>
            alert(`${product.name} added to wishlist!`)
          }
          loading={loading}
        />

        {/* Special Offers */}
        <SpecialOffers />

        {/* AI Recommendations */}
        <AIRecommendations products={filteredProducts} />

        {/* Featured Brands */}
        <FeaturedBrands />

        {/* Testimonials */}
        <TestimonialsSection testimonials={productsData.testimonials} />

        {/* Footer */}
        <Footer />

        {/* Shopping Cart Sidebar */}
        <ShoppingCart
          items={cartItems}
          isOpen={cartOpen}
          onClose={() => setCartOpen(false)}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
        />

        {/* Login Modal */}
        <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />

        {/* Cart Toggle Button */}
        <button
          onClick={() => setCartOpen(!cartOpen)}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600
                   hover:from-blue-600 hover:to-blue-700 text-white rounded-full shadow-lg
                   flex items-center justify-center font-bold text-lg
                   transform hover:scale-110 transition-all duration-300 z-30"
          title="Shopping Cart"
        >
          🛒
        </button>
      </div>
    </div>
  );
}

export default App;
