import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const FeaturedBrands = () => {
  const [currentPosition, setCurrentPosition] = useState(0);

  const brands = [
    { id: 1, name: 'Apple', logo: '🍎', color: 'from-gray-700 to-gray-900' },
    { id: 2, name: 'Samsung', logo: '📱', color: 'from-blue-600 to-blue-800' },
    { id: 3, name: 'Sony', logo: '🎧', color: 'from-red-600 to-red-800' },
    { id: 4, name: 'Nike', logo: '👟', color: 'from-orange-500 to-orange-700' },
    { id: 5, name: 'Gucci', logo: '👜', color: 'from-red-600 to-yellow-600' },
    { id: 6, name: 'Zara', logo: '👗', color: 'from-pink-500 to-purple-600' },
  ];

  const nextSlide = () => {
    setCurrentPosition((prev) => (prev + 1) % brands.length);
  };

  const prevSlide = () => {
    setCurrentPosition((prev) => (prev - 1 + brands.length) % brands.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Featured Brands
        </h2>

        <div className="relative">
          {/* Carousel */}
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentPosition * 100}%)`
              }}
            >
              {brands.map((brand) => (
                <div
                  key={brand.id}
                  className={`min-w-full bg-gradient-to-br ${brand.color} h-64 flex items-center
                           justify-center text-white relative group cursor-pointer`}
                >
                  <div className="text-center">
                    <div className="text-8xl mb-4">{brand.logo}</div>
                    <h3 className="text-3xl font-bold">{brand.name}</h3>
                  </div>
                  <button className="absolute bottom-6 left-1/2 transform -translate-x-1/2 px-6 py-2
                                   bg-white text-gray-900 font-bold rounded-lg
                                   opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                   transform group-hover:scale-110">
                    Shop {brand.name}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80
                     hover:bg-white text-gray-900 p-2 rounded-full transition-all shadow-lg"
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80
                     hover:bg-white text-gray-900 p-2 rounded-full transition-all shadow-lg"
          >
            <FiChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {brands.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPosition(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentPosition
                    ? 'bg-blue-500 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBrands;
