import React from 'react';

const CategoriesSection = ({ categories, onCategorySelect }) => {
  return (
    <section className="py-12 px-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Shop by Category
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategorySelect(category.name)}
              className="group"
            >
              <div className={`relative h-32 md:h-40 rounded-xl bg-gradient-to-br ${category.color}
                            shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300
                            flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="relative text-center z-10">
                  <div className="text-4xl md:text-5xl mb-2">{category.icon}</div>
                  <p className="text-white font-semibold text-sm md:text-base truncate px-2">
                    {category.name}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
