import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Summer Collection",
      subtitle: "Get up to 70% off on selected items",
      image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=1200&h=600&fit=crop",
      color: "from-orange-400 to-orange-600"
    },
    {
      title: "Tech Gadgets",
      subtitle: "Latest electronics with exclusive deals",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&h=600&fit=crop",
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Fashion Week",
      subtitle: "Premium brands at unbeatable prices",
      image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=1200&h=600&fit=crop",
      color: "from-pink-400 to-pink-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="pt-20 w-full overflow-hidden">
      <div className="relative h-96 md:h-[500px] bg-gray-200 dark:bg-gray-800">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
                filter: 'brightness(0.5)'
              }}
            />
            <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-slide-up">
                {slide.title}
              </h1>
              <p className="text-sm sm:text-lg md:text-xl text-gray-100 mb-8 animate-slide-up">
                {slide.subtitle}
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 
                               text-white rounded-lg font-bold hover:shadow-xl
                               transform hover:scale-105 transition-all duration-300
                               animate-slide-up">
                Shop Now
              </button>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40
                     text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
        >
          <FiChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40
                     text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
        >
          <FiChevronRight size={24} />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
