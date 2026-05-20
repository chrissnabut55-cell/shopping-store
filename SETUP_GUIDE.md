# ShopMart Setup Guide

## ⚡ Quick Start (5 minutes)

### Step 1: Install Node Modules
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm start
```

The application will automatically open in your browser at `http://localhost:3000`

### Step 3: Explore the Website
- Browse through different product categories
- Use the search bar to find products
- Apply filters and sort products
- Add items to cart
- Try promo codes (SAVE10, SAVE20, SUMMER30)
- Toggle dark/light mode

---

## 📋 Project Components Overview

### Navigation Component
- Sticky navbar with logo and search
- Dark mode toggle
- Cart icon with item count
- Mobile responsive menu
- User profile and wishlist icons

### Hero Section
- Auto-scrolling image carousel
- Manual navigation with arrows
- Dot indicators
- Call-to-action "Shop Now" button
- Professional banner styling

### Categories Section
- 6 product categories with emojis
- Gradient colored cards
- Hover animation effects
- Click to filter by category

### Product Grid
- Responsive grid (1-4 columns based on screen size)
- Product cards with:
  - Product image with hover zoom
  - Discount badge
  - Product name and category
  - Rating with stars
  - Price (with original strikethrough)
  - Add to cart button
  - Quick actions (Add/Wishlist)

### Filter Bar
- Filter by category (checkbox)
- Price range slider
- Sort options (Relevance, Price, Rating)
- Real-time filtering

### Shopping Cart
- Slide-in sidebar panel
- Add/remove items
- Quantity adjustment
- Subtotal, tax, shipping calculation
- Promo code input
- Total price display
- Checkout button

### Special Offers
- Flash sale section
- Countdown timer (HH:MM:SS)
- Discount banners
- Newsletter subscription

### Featured Brands
- Brand carousel
- Auto-scrolling
- Manual navigation
- Gradient backgrounds

### AI Recommendations
- Smart product suggestions
- Trending products section
- "AI Pick" badges

### Testimonials
- Customer reviews
- 5-star ratings
- Profile photos
- Verified purchase badge

### Footer
- Newsletter subscription
- Quick links
- Social media icons
- Contact information
- Company information

### Login Modal
- Login form
- Registration form
- Social login options
- Toggle between login/signup

---

## 🎨 Customization Guide

### Change Primary Color
Edit `tailwind.config.js`:
```javascript
primary: {
  500: '#YOUR_COLOR_HEX',
  600: '#YOUR_COLOR_HEX_DARKER',
}
```

### Add More Products
Edit `src/data/products.json`:
```json
{
  "id": 19,
  "name": "Product Name",
  "category": "Electronics",
  "price": 99.99,
  "originalPrice": 129.99,
  "image": "image_url",
  "rating": 4.5,
  "reviews": 100,
  "inStock": true,
  "discount": 23
}
```

### Change Typography
Edit `src/index.css` and modify font-family or use Tailwind classes.

### Add New Component
1. Create new file in `src/components/YourComponent.jsx`
2. Import in `src/App.jsx`
3. Add to JSX render

---

## 🚀 Building for Production

```bash
npm run build
```

Output files will be in the `build/` directory.

Deploy to:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static host

---

## 🔧 Available Scripts

- `npm start` - Run development server
- `npm run build` - Create production build
- `npm test` - Run tests
- `npm run eject` - Eject from create-react-app (not reversible)

---

## 📱 Testing Responsive Design

### Chrome DevTools
1. Open DevTools (F12)
2. Click device toolbar icon (Ctrl+Shift+M)
3. Select different devices to test

### Breakpoints
- Mobile: 375px (iPhone SE)
- Tablet: 768px (iPad)
- Desktop: 1024px (Laptop)

---

## 🎯 Features to Try

### Shopping Cart
1. Click products to add to cart
2. Click floating cart button to view
3. Adjust quantities with +/- buttons
4. Enter promo code: `SAVE10`
5. See discount applied

### Search & Filter
1. Type in search bar to find products
2. Click category cards to filter
3. Use filter bar for price range
4. Sort by popularity, price, rating

### Dark Mode
1. Click moon icon in navigation
2. Entire page theme changes
3. Click sun icon to switch back

### Animations
- Hover over products to see scale/shadow effects
- Scroll to see fade-in animations
- Navigation updates smoothly
- Cart slides in/out smoothly

---

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [React Icons](https://react-icons.github.io/react-icons)

---

## 🤝 Contributing

Feel free to:
- Add new features
- Fix bugs
- Improve styling
- Optimize performance
- Add tests

---

## ⚠️ Important Notes

1. This is a frontend demo - no actual payments are processed
2. Product data is stored in `products.json`
3. Cart data is stored in React state (resets on page reload)
4. To persist data, integrate with a backend/database

---

## 📞 Support

For issues or questions:
1. Check the README.md
2. Review component code comments
3. Check browser console for errors (F12)

---

Happy coding! 🚀
