import React, { useState } from 'react';
import { FiX, FiPlus, FiMinus, FiTrash2 } from 'react-icons/fi';

const ShoppingCart = ({ items, isOpen, onClose, onUpdateQuantity, onRemoveItem }) => {
  const [promoCode, setPromoCode] = useState('');
  const [promoDiscount, setPromoDiscount] = useState(0);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1; // 10% tax
  const shipping = items.length > 0 ? (subtotal > 100 ? 0 : 10) : 0;
  const discount = subtotal * (promoDiscount / 100);
  const total = subtotal + tax + shipping - discount;

  const applyPromoCode = () => {
    const codes = { 'SAVE10': 10, 'SAVE20': 20, 'SUMMER30': 30 };
    setPromoDiscount(codes[promoCode.toUpperCase()] || 0);
    if (!codes[promoCode.toUpperCase()]) {
      alert('Invalid promo code');
    }
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Cart Panel */}
      <div
        className={`fixed right-0 top-0 h-full w-full sm:w-96 bg-white dark:bg-gray-900 shadow-xl
                   transform transition-transform duration-300 z-50 overflow-y-auto
                   ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="sticky top-0 flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Shopping Cart</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition"
          >
            <FiX size={24} className="text-gray-700 dark:text-gray-300" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-96">
            <div className="text-6xl mb-4">🛒</div>
            <p className="text-gray-500 dark:text-gray-400 text-center">Your cart is empty</p>
            <button
              onClick={onClose}
              className="mt-6 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="p-6 space-y-4">
            {/* Cart Items */}
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-md transition"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white truncate">
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      ${item.price.toFixed(2)} each
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition"
                      >
                        <FiMinus size={16} />
                      </button>
                      <span className="w-6 text-center font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition"
                      >
                        <FiPlus size={16} />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="p-2 text-red-500 hover:bg-red-100 dark:hover:bg-red-900/30 rounded transition"
                  >
                    <FiTrash2 size={18} />
                  </button>
                </div>
              ))}
            </div>

            {/* Promo Code */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Promo Code
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Enter code (SAVE10, SAVE20, SUMMER30)"
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                           bg-gray-50 dark:bg-gray-800 dark:text-white
                           focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <button
                  onClick={applyPromoCode}
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg
                           font-semibold transition text-sm"
                >
                  Apply
                </button>
              </div>
            </div>

            {/* Summary */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-2">
              <div className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              {promoDiscount > 0 && (
                <div className="flex justify-between text-green-600 dark:text-green-400 font-semibold">
                  <span>Discount ({promoDiscount}%):</span>
                  <span>-${discount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Shipping:</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Tax (10%):</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xl font-bold text-gray-900 dark:text-white pt-2 border-t border-gray-200 dark:border-gray-700">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button className="w-full mt-6 py-3 bg-gradient-to-r from-green-500 to-green-600
                             hover:from-green-600 hover:to-green-700 text-white font-bold rounded-lg
                             transition-all duration-300 transform hover:scale-105">
              Proceed to Checkout
            </button>
            <button
              onClick={onClose}
              className="w-full py-3 border-2 border-gray-300 dark:border-gray-600
                       text-gray-900 dark:text-white font-semibold rounded-lg
                       hover:bg-gray-50 dark:hover:bg-gray-800 transition"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ShoppingCart;
