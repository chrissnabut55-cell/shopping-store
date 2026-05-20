import React, { useState } from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert('Thank you for subscribing!');
      setEmail('');
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        {/* Newsletter Section */}
        <div className="mb-12 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
              <p className="text-blue-100">
                Subscribe to get special offers and early access to new products!
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70
                         border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-yellow-400 text-blue-600 font-bold rounded-lg
                         hover:bg-yellow-300 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-3xl">🛍️</div>
              <h3 className="text-xl font-bold text-white">ShopMart</h3>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Your one-stop destination for quality products at unbeatable prices.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <FiMapPin size={18} className="text-blue-400" />
                <span className="text-sm">123 Market Street, City, Country</span>
              </div>
              <div className="flex items-center gap-3">
                <FiPhone size={18} className="text-blue-400" />
                <span className="text-sm">+1 (800) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <FiMail size={18} className="text-blue-400" />
                <span className="text-sm">support@shopmart.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400 transition duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition duration-300">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition duration-300">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition duration-300">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400 transition duration-300">
                  Grocery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition duration-300">
                  Electronics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition duration-300">
                  Fashion
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition duration-300">
                  Home & Garden
                </a>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Policies</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400 transition duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition duration-300">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition duration-300">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition duration-300">
                  Shipping Info
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center
                         justify-center transition duration-300 transform hover:scale-110"
              >
                <FiFacebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center
                         justify-center transition duration-300 transform hover:scale-110"
              >
                <FiTwitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center
                         justify-center transition duration-300 transform hover:scale-110"
              >
                <FiInstagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center
                         justify-center transition duration-300 transform hover:scale-110"
              >
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
            <div className="text-sm">
              <p>© 2024 ShopMart. All rights reserved.</p>
            </div>
            <div className="text-sm text-center">
              <p>Made with ❤️ by Your Team</p>
            </div>
            <div className="text-sm text-right hidden md:block">
              <p>🌍 Available in 150+ countries</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
