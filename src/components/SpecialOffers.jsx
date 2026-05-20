import React, { useState, useEffect } from 'react';

const SpecialOffers = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 30,
    seconds: 45
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds -= 1;
        if (seconds < 0) {
          seconds = 59;
          minutes -= 1;
        }
        if (minutes < 0) {
          minutes = 59;
          hours -= 1;
        }
        if (hours < 0) {
          hours = 23;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const offers = [
    {
      id: 1,
      title: "Flash Sale - Electronics",
      discount: "50%",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Fashion Mega Deal",
      discount: "40%",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Fresh Produce",
      discount: "35%",
      image: "https://images.unsplash.com/photo-1560806887-1295dbba83f3?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-12 px-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            🔥 Flash Sale
          </h2>
          <p className="text-gray-600 dark:text-gray-400">Limited time offers - Hurry up!</p>
        </div>

        {/* Countdown Timer */}
        <div className="flex justify-center mb-8">
          <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-lg p-6 text-white max-w-md w-full">
            <p className="text-center font-semibold mb-4">Offer Ends In:</p>
            <div className="flex justify-center gap-4">
              <div className="text-center">
                <div className="text-4xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
                <p className="text-xs mt-1">Hours</p>
              </div>
              <div className="text-2xl font-bold">:</div>
              <div className="text-center">
                <div className="text-4xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <p className="text-xs mt-1">Mins</p>
              </div>
              <div className="text-2xl font-bold">:</div>
              <div className="text-center">
                <div className="text-4xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <p className="text-xs mt-1">Secs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="group relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-xl
                       transition-all duration-300 cursor-pointer"
            >
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                <p className="text-lg font-semibold mb-2">{offer.title}</p>
                <div className="text-5xl font-bold text-yellow-300 mb-4">{offer.discount}</div>
                <button className="px-6 py-2 bg-white text-orange-500 font-bold rounded-lg
                               hover:bg-orange-50 transition-colors duration-300 transform
                               group-hover:scale-110 transition-transform">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Banner */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to Get More Deals!</h3>
          <p className="text-lg mb-6">Get exclusive offers and early access to sales</p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70
                       border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="px-8 py-3 bg-yellow-400 text-purple-600 font-bold rounded-lg
                             hover:bg-yellow-300 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
